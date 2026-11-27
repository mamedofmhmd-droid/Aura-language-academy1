import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import multer from "multer";
import path from "path";
import crypto from "crypto";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "change_me_in_production";

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 300 }));

// Multer storage for admin video uploads
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../uploads/videos"),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `lesson-${Date.now()}${ext}`);
  }
});
const upload = multer({ storage, limits: { fileSize: 1024 * 1024 * 800 } });

// 1. Register + Email Verification Token
app.post("/api/auth/register", async (req, res) => {
  const { fullName, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const verifyToken = crypto.randomBytes(24).toString("hex");
  const user = await prisma.user.create({
    data: { fullName, email, passwordHash, verifyToken }
  });
  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, user: { id: user.id, fullName: user.fullName, email: user.email, emailVerified: user.emailVerified } });
});

// 2. Verify Email
app.get("/api/auth/verify/:token", async (req, res) => {
  const user = await prisma.user.findFirst({ where: { verifyToken: req.params.token } });
  if (!user) return res.status(400).json({ error: "Etibarsız təsdiq linki" });
  await prisma.user.update({ where: { id: user.id }, data: { emailVerified: true, verifyToken: null } });
  res.json({ message: "E-poçt təsdiqləndi" });
});

// 3. Login
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || user.isBlocked || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ error: "E-poçt və ya şifrə yanlışdır" });
  }
  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, user: { id: user.id, fullName: user.fullName, email: user.email, role: user.role } });
});

// 4. Forgot & Update Password
app.post("/api/auth/forgot-password", async (req, res) => {
  const { email } = req.body;
  const resetToken = crypto.randomBytes(24).toString("hex");
  await prisma.user.updateMany({ where: { email }, data: { resetToken } });
  res.json({ message: "Şifrə bərpa linki göndərildi" });
});

app.post("/api/auth/update-password", async (req, res) => {
  const { userId, newPassword } = req.body;
  const passwordHash = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({ where: { id: userId }, data: { passwordHash } });
  res.json({ message: "Şifrə yeniləndi" });
});

// 5. Subscription (15 GEL / month)
app.post("/api/subscriptions/activate", async (req, res) => {
  const { userId, autoRenew = true } = req.body;
  const nextBillingDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  await prisma.payment.create({ data: { userId, amountGel: 15.0, status: "CONFIRMED" } });
  const sub = await prisma.subscription.create({
    data: { userId, planPriceGel: 15, status: "ACTIVE", autoRenew, nextBillingDate }
  });
  res.json({ subscription: sub });
});

// 6. Admin Video Upload Endpoint (You upload your own .mp4 files here)
app.post("/api/admin/lessons/:id/upload-video", upload.single("video"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "Video faylı seçilməyib" });
  const lesson = await prisma.videoLesson.update({
    where: { id: req.params.id },
    data: { videoPath: `/uploads/videos/${req.file.filename}` }
  });
  res.json({ lesson });
});

// 7. Protected Video Stream (Only active subscribers)
app.get("/api/videos/stream/:lessonId", async (req, res) => {
  const { userId } = req.query;
  const activeSub = await prisma.subscription.findFirst({
    where: { userId: String(userId || ""), status: "ACTIVE" }
  });
  if (!activeSub) return res.status(403).json({ error: "Yalnız aktiv abunəçilər (15 GEL) baxa bilər" });

  const lesson = await prisma.videoLesson.findUnique({ where: { id: req.params.lessonId } });
  if (!lesson?.videoPath) return res.status(404).json({ error: "Bu dərs üçün video hələ yüklənməyib" });
  res.sendFile(path.join(__dirname, "..", lesson.videoPath));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`AURA GEORGIAN API running on port ${PORT}`));
