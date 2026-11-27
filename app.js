const STATE_KEY = "aura_georgian_complete_v2";

const initialData = {
  user: {
    id: "USR-1024",
    name: "Sali Sulikova",
    email: "sali.sulikova@gmail.com",
    verified: true,
    subscriptionActive: true,
    autoPay: true,
    nextBillingDate: "2026-12-27",
    points: 1450
  },
  levels: [
    { code: "A1", name: "A1 — Beginner", desc: "Əlifba, salamlaşma, rəqəmlər və əsas gündəlik ifadələr.", lessonsCount: 30, wordsCount: 250 },
    { code: "A2", name: "A2 — Elementary", desc: "Mağaza, nəqliyyat, zamanlar və sadə dialoqlar.", lessonsCount: 30, wordsCount: 450 },
    { code: "B1", name: "B1 — Intermediate", desc: "Fikir bildirmək, iş mühiti və mürəkkəb feil çəkimləri.", lessonsCount: 30, wordsCount: 800 },
    { code: "B2", name: "B2 — Upper Intermediate", desc: "Sərbəst danışıq, məqalələr və akademik qrammatika.", lessonsCount: 30, wordsCount: 1200 }
  ],
  lessons: [
    {
      id: "v-1",
      level: "A1",
      bucket: "new",
      title: "Dərs #1 — Salamlaşma və özünü təqdimetmə",
      duration: "08:30",
      videoUrl: "",
      lastSec: 0,
      subtitles: [
        { sec: 0, ka: "გამარჯობა! მე სალი ვარ.", az: "Salam! Mən Saliyəm." },
        { sec: 45, ka: "როგორ ხარ? კარგად, მადლობა.", az: "Necəsən? Yaxşıyam, təşəkkür edirəm." },
        { sec: 110, ka: "სასიამოვნოა შენი გაცნობა.", az: "Tanış olduğuma şadam." }
      ],
      quiz: [
        { q: "«გამარჯობა» nə deməkdir?", options: ["Salam", "Sağ ol", "Su"], correct: 0 },
        { q: "«მადლობა» sözünün mənası nədir?", options: ["Bəli", "Təşəkkür", "Ev"], correct: 1 }
      ]
    },
    {
      id: "v-2",
      level: "A2",
      bucket: "new",
      title: "Dərs #2 — Kafedə sifariş və hesab",
      duration: "09:15",
      videoUrl: "",
      lastSec: 0,
      subtitles: [
        { sec: 0, ka: "მინდა ყავა და წყალი.", az: "Qəhvə və su istəyirəm." },
        { sec: 60, ka: "ანგარიში, თუ შეიძლება.", az: "Hesabı gətirin, zəhmət olmasa." }
      ],
      quiz: [
        { q: "«ყავა» nə deməkdir?", options: ["Çay", "Qəhvə", "Çörək"], correct: 1 },
        { q: "«წყალი» nə deməkdir?", options: ["Su", "Süd", "Meyvə"], correct: 0 }
      ]
    },
    {
      id: "v-3",
      level: "B1",
      bucket: "archive",
      title: "Arxiv Dərsi — İş müsahibəsi və təcrübə",
      duration: "11:00",
      videoUrl: "",
      lastSec: 0,
      subtitles: [
        { sec: 0, ka: "მე ვმუშაობ პროექტის მენეჯერად.", az: "Mən layihə meneceri kimi işləyirəm." }
      ],
      quiz: [
        { q: "«ვმუშაობ» hansı feildir?", options: ["İşləyirəm", "Oxuyuram", "Gedirəm"], correct: 0 }
      ]
    },
    {
      id: "v-4",
      level: "B2",
      bucket: "archive",
      title: "Arxiv Dərsi — Mədəniyyət və ictimai müzakirə",
      duration: "12:20",
      videoUrl: "",
      lastSec: 0,
      subtitles: [
        { sec: 0, ka: "საქართველოს ისტორია ძალიან მდიდარია.", az: "Gürcüstanın tarixi çox zəngindir." }
      ],
      quiz: [
        { q: "«მდიდარი» nə deməkdir?", options: ["Zəngin", "Kiçik", "Uzaq"], correct: 0 }
      ]
    }
  ],
  words: [
    { id: "w-1", level: "A1", ka: "გამარჯობა", tr: "gamarjoba", az: "Salam", example: "გამარჯობა, მეგობარო! — Salam, dostum!", fav: true, learned: true },
    { id: "w-2", level: "A1", ka: "მადლობა", tr: "madloba", az: "Təşəkkür", example: "დიდი მადლობა! — Çox sağ ol!", fav: true, learned: true },
    { id: "w-3", level: "A2", ka: "მატარებელი", tr: "matarebeli", az: "Qatar", example: "მატარებელი დროულად მოდის. — Qatar vaxtında gəlir.", fav: false, learned: false },
    { id: "w-4", level: "B1", ka: "გამოცდილება", tr: "gamotsdileba", az: "Təcrübə", example: "სამუშაო გამოცდილება — İş təcrübəsi", fav: false, learned: false }
  ],
  verbs: [
    { id: "vb-1", level: "A1", ka: "ყოფნა (ვარ / ხარ / არის)", az: "Olmaq", conj: "მე ვარ · შენ ხარ · ის არის", example: "მე თბილისში ვარ. — Mən Tbilisidəyəm." },
    { id: "vb-2", level: "A2", ka: "წასვლა (მივდივარ / მიდიხარ)", az: "Getmək", conj: "მივდივარ · მიდიხარ · მიდის", example: "სახლში მივდივარ. — Evə gedirəm." },
    { id: "vb-3", level: "B1", ka: "სწავლა (ვსწავლობ / სწავლობ)", az: "Öyrənmək", conj: "ვსწავლობ · სწავლობ · სწავლობს", example: "ქართულ ენას ვსწავლობ. — Gürcü dilini öyrənirəm." }
  ],
  grammar: [
    { id: "gr-1", level: "A1", title: "Şəxs əvəzlikləri (მე, შენ, ის)", rule: "Gürcü dilində qrammatik cins yoxdur; «ის» həm kişi, həm qadın, həm də orta cins üçün işlənir.", example: "მე სტუდენტი ვარ. — Mən tələbəyəm." },
    { id: "gr-2", level: "A2", title: "İsimlərin cəm forması (-ებ-)", rule: "İsimlərin sonuna -ები artırılaraq cəm yaradılır: წიგნი (kitab) → წიგნები (kitablar).", example: "ახალი წიგნები — Yeni kitablar" },
    { id: "gr-3", level: "B1", title: "Erqativ hal (მოთხრობითი ბრუნვა)", rule: "Keçmiş zamanda təsirli feillərlə subyekt -მა / -მ şəkilçisi qəbul edir.", example: "სალიმ წერილი დაწერა. — Sali məktub yazdı." }
  ],
  users: [
    { id: "USR-1024", name: "Sali Sulikova", email: "sali.sulikova@gmail.com", sub: "15 GEL (Aktiv)", blocked: false },
    { id: "USR-1025", name: "Aynur Kazımova", email: "aynur.kazimova@gmail.com", sub: "15 GEL (Aktiv)", blocked: false },
    { id: "USR-1026", name: "Qiymət İsmayılova", email: "qiymet.ismayilova@gmail.com", sub: "15 GEL (Aktiv)", blocked: false }
  ],
  payments: [
    { date: "2026-11-27", amount: "15.00 GEL", status: "Təsdiqlənib" },
    { date: "2026-10-27", amount: "15.00 GEL", status: "Təsdiqlənib" }
  ],
  activities: [
    "Dərs #1 «Salamlaşma və özünü təqdimetmə» izlənildi (100% test balı)",
    "Yeni söz öyrənildi: გამარჯობა (Salam)",
    "Aylıq abunəlik yeniləndi: 15.00 GEL"
  ],
  emailLogs: [
    { date: "2026-11-27 19:30", type: "Ödəniş təsdiqi", text: "Sali Sulikova — 15.00 GEL aylıq abunəlik aktivləşdirildi." },
    { date: "2026-11-26 14:00", type: "Yeni video bildirişi", text: "Yeni A1 dərsi əlavə olundu: Salamlaşma və özünü təqdimetmə." }
  ],
  auditLogs: [
    "2026-11-27 19:35 — Admin panelinə giriş təsdiqləndi"
  ],
  favorites: ["v-1"],
  watched: ["v-1"],
  activeLessonId: "v-1"
};

let state = JSON.parse(localStorage.getItem(STATE_KEY) || "null") || structuredClone(initialData);
let selectedLevel = "ALL";
let activeLexTab = "words";
let flashIdx = 0;

function persist() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage quota if large blob URL is used temporarily
  }
}

function fmtTime(sec) {
  const s = Math.max(0, Math.floor(sec));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

/* SPEECH SYNTHESIS AUDIO FOR GEORGIAN WORDS & SENTENCES */
function speakGeorgian(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ka-GE";
  utter.rate = 0.92;
  window.speechSynthesis.speak(utter);
}

/* RENDER LEVELS */
function renderLevels() {
  const grid = document.getElementById("levelsGrid");
  grid.innerHTML = "";
  state.levels.forEach((lvl) => {
    const card = document.createElement("article");
    card.className = "level-card";
    card.innerHTML = `
      <span class="badge-pill">${lvl.code}</span>
      <h3>${lvl.name}</h3>
      <p>${lvl.desc}</p>
      <div class="small-muted">${lvl.lessonsCount} video dərs · ${lvl.wordsCount}+ söz</div>
      <button type="button" class="btn-outline-dark btn-sm mt-10">Səviyyəni seç</button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      selectedLevel = lvl.code;
      document.querySelectorAll(".lvl-btn").forEach((b) => b.classList.toggle("active", b.dataset.level === lvl.code));
      renderLessons();
      renderLexicon();
      document.getElementById("lessons-section").scrollIntoView({ behavior: "smooth" });
    });
    grid.appendChild(card);
  });
}

/* RENDER LESSONS */
function renderLessons() {
  const q = document.getElementById("videoSearchInput").value.trim().toLowerCase();
  const bucket = document.getElementById("videoBucketFilter").value;
  const grid = document.getElementById("lessonsGrid");
  grid.innerHTML = "";

  const list = state.lessons.filter((les) => {
    if (selectedLevel !== "ALL" && les.level !== selectedLevel) return false;
    if (bucket === "new" && les.bucket !== "new") return false;
    if (bucket === "archive" && les.bucket !== "archive") return false;
    if (bucket === "favorites" && !state.favorites.includes(les.id)) return false;
    if (q && !les.title.toLowerCase().includes(q)) return false;
    return true;
  });

  list.forEach((les) => {
    const hasVideo = Boolean(les.videoUrl);
    const card = document.createElement("article");
    card.className = "lesson-card" + (les.id === state.activeLessonId ? " active" : "");
    card.innerHTML = `
      <div class="flex-between">
        <span class="badge-pill">${les.level} · ${les.bucket === "new" ? "Yeni video" : "Arxiv"}</span>
        <span class="small-muted">${hasVideo ? "Video hazırdır ✓" : "Video yeri boşdur"} · ${les.duration}</span>
      </div>
      <h3>${les.title}</h3>
      <p>Son izlənilən: ${fmtTime(les.lastSec)} ${state.favorites.includes(les.id) ? "· ★ Seçilmiş" : ""}</p>
    `;
    card.addEventListener("click", () => {
      state.activeLessonId = les.id;
      if (!state.watched.includes(les.id)) state.watched.push(les.id);
      persist();
      renderLessons();
      renderPlayer();
      renderDashboard();
    });
    grid.appendChild(card);
  });
}

function currentLesson() {
  return state.lessons.find((l) => l.id === state.activeLessonId) || state.lessons[0];
}

function updateSubtitleView(les, sec) {
  let sub = les.subtitles[0] || { ka: "გამარჯობა!", az: "Salam!" };
  for (const item of les.subtitles) {
    if (sec >= item.sec) sub = item;
  }
  const showKa = document.getElementById("chkSubKa").checked;
  const showAz = document.getElementById("chkSubAz").checked;
  document.getElementById("subKaDisplay").textContent = showKa ? sub.ka : "";
  document.getElementById("subAzDisplay").textContent = showAz ? sub.az : "";
  document.getElementById("resumeLabel").textContent = `Son izlənilən: ${fmtTime(sec)}`;
}

function renderPlayer() {
  const les = currentLesson();
  document.getElementById("activeLessonMeta").textContent = `${les.level} · ${les.bucket === "new" ? "Yeni video" : "Arxiv"} · Müddət: ${les.duration}`;
  document.getElementById("activeLessonTitle").textContent = les.title;
  document.getElementById("videoWatermark").textContent = `ID: #${state.user.id} · ${state.user.email}`;

  const isFav = state.favorites.includes(les.id);
  document.getElementById("favLessonBtn").textContent = isFav ? "★ Seçilmişlərdədir" : "☆ Seçilmişlərə əlavə et";

  const videoEl = document.getElementById("lessonVideoElement");
  const emptySlot = document.getElementById("videoEmptySlot");

  if (les.videoUrl && state.user.subscriptionActive) {
    videoEl.src = les.videoUrl;
    videoEl.classList.remove("hidden");
    emptySlot.classList.add("hidden");
    videoEl.onloadedmetadata = () => {
      if (les.lastSec > 0 && les.lastSec < videoEl.duration) {
        videoEl.currentTime = les.lastSec;
      }
    };
  } else {
    videoEl.pause();
    videoEl.removeAttribute("src");
    videoEl.classList.add("hidden");
    emptySlot.classList.remove("hidden");
    document.getElementById("videoStatusTag").textContent = state.user.subscriptionActive
      ? "Video faylı gözlənilir (Admin Paneldən yükləyin)"
      : "Videoya baxmaq üçün 15 GEL abunəliyi aktivləşdirin";
  }

  updateSubtitleView(les, les.lastSec);

  const rows = document.getElementById("transcriptRows");
  rows.innerHTML = "";
  les.subtitles.forEach((s) => {
    const div = document.createElement("div");
    div.className = "tr-item";
    div.innerHTML = `<strong>${s.ka}</strong><span>${s.az} (${fmtTime(s.sec)}) · 🔊</span>`;
    div.addEventListener("click", () => {
      les.lastSec = s.sec;
      if (!videoEl.classList.contains("hidden")) {
        videoEl.currentTime = s.sec;
      }
      updateSubtitleView(les, s.sec);
      speakGeorgian(s.ka);
      persist();
    });
    rows.appendChild(div);
  });

  const qForm = document.getElementById("lessonQuizForm");
  qForm.innerHTML = "";
  les.quiz.forEach((item, idx) => {
    const box = document.createElement("div");
    box.className = "q-box";
    box.innerHTML = `<strong>${idx + 1}. ${item.q}</strong>` +
      item.options.map((opt, oi) => `<label><input type="radio" name="lq_${idx}" value="${oi}" /> ${opt}</label>`).join("");
    qForm.appendChild(box);
  });
}

// Track real <video> timeupdate to save resume position
const lessonVideoEl = document.getElementById("lessonVideoElement");
lessonVideoEl.addEventListener("timeupdate", () => {
  const les = currentLesson();
  les.lastSec = Math.floor(lessonVideoEl.currentTime);
  updateSubtitleView(les, les.lastSec);
  persist();
});

document.getElementById("speakSubBtn").addEventListener("click", () => {
  const txt = document.getElementById("subKaDisplay").textContent;
  if (txt) speakGeorgian(txt);
});

document.getElementById("chkSubKa").addEventListener("change", () => updateSubtitleView(currentLesson(), currentLesson().lastSec));
document.getElementById("chkSubAz").addEventListener("change", () => updateSubtitleView(currentLesson(), currentLesson().lastSec));

document.getElementById("favLessonBtn").addEventListener("click", () => {
  const id = currentLesson().id;
  state.favorites = state.favorites.includes(id) ? state.favorites.filter((x) => x !== id) : [...state.favorites, id];
  persist();
  renderPlayer();
  renderLessons();
});

document.getElementById("checkLessonQuizBtn").addEventListener("click", () => {
  const les = currentLesson();
  let ok = 0;
  les.quiz.forEach((q, i) => {
    const sel = document.querySelector(`input[name="lq_${i}"]:checked`);
    if (sel && Number(sel.value) === q.correct) ok++;
  });
  const pct = Math.round((ok / (les.quiz.length || 1)) * 100);
  state.user.points += ok * 50;
  state.activities.unshift(`Test tamamlandı: «${les.title}» — ${pct}% (${ok}/${les.quiz.length})`);
  document.getElementById("quizResultTag").textContent = `Bal: ${pct}%`;
  document.getElementById("lessonQuizFeedback").textContent = `${ok} / ${les.quiz.length} düzgün cavab! +${ok * 50} bal əlavə olundu.`;
  persist();
  renderDashboard();
});

document.getElementById("nextLessonBtn").addEventListener("click", () => {
  const idx = state.lessons.findIndex((l) => l.id === state.activeLessonId);
  const next = state.lessons[(idx + 1) % state.lessons.length];
  state.activeLessonId = next.id;
  persist();
  renderLessons();
  renderPlayer();
});

/* RENDER LEXICON (WORDS + AUDIO, VERBS, GRAMMAR) */
function renderLexicon() {
  const q = document.getElementById("lexSearchInput").value.trim().toLowerCase();
  const lvl = document.getElementById("lexLevelSelect").value;
  const area = document.getElementById("lexContentArea");
  area.innerHTML = "";

  if (activeLexTab === "words") {
    state.words
      .filter((w) => (lvl === "ALL" || w.level === lvl) && (!q || `${w.ka} ${w.az} ${w.tr}`.toLowerCase().includes(q)))
      .forEach((w) => {
        const card = document.createElement("article");
        card.className = "lex-card";
        card.innerHTML = `
          <div class="flex-between">
            <span class="badge-pill">${w.level}</span>
            <div class="toolbar-row">
              <button type="button" class="btn-outline-dark btn-sm speak-word-btn">🔊 Dinlə</button>
              <button type="button" class="btn-outline-dark btn-sm fav-word-btn">${w.fav ? "★" : "☆"}</button>
            </div>
          </div>
          <h4>${w.ka} (${w.tr})</h4>
          <p><strong>Tərcümə:</strong> ${w.az}</p>
          <p>${w.example}</p>
        `;
        card.querySelector(".speak-word-btn").addEventListener("click", () => speakGeorgian(w.ka));
        card.querySelector(".fav-word-btn").addEventListener("click", () => {
          w.fav = !w.fav;
          persist();
          renderLexicon();
        });
        area.appendChild(card);
      });
  } else if (activeLexTab === "verbs") {
    state.verbs
      .filter((v) => (lvl === "ALL" || v.level === lvl) && (!q || `${v.ka} ${v.az} ${v.conj}`.toLowerCase().includes(q)))
      .forEach((v) => {
        const card = document.createElement("article");
        card.className = "lex-card";
        card.innerHTML = `
          <div class="flex-between">
            <span class="badge-pill">${v.level} · Feil</span>
            <button type="button" class="btn-outline-dark btn-sm speak-verb-btn">🔊 Dinlə</button>
          </div>
          <h4>${v.ka}</h4>
          <p><strong>Mənası:</strong> ${v.az}</p>
          <p><strong>Çəkimlər:</strong> ${v.conj}</p>
          <p>${v.example}</p>
        `;
        card.querySelector(".speak-verb-btn").addEventListener("click", () => speakGeorgian(v.conj));
        area.appendChild(card);
      });
  } else {
    state.grammar
      .filter((g) => (lvl === "ALL" || g.level === lvl) && (!q || `${g.title} ${g.rule}`.toLowerCase().includes(q)))
      .forEach((g) => {
        const card = document.createElement("article");
        card.className = "lex-card";
        card.innerHTML = `
          <span class="badge-pill">${g.level} · Qrammatika</span>
          <h4>${g.title}</h4>
          <p>${g.rule}</p>
          <p><em>${g.example}</em></p>
        `;
        area.appendChild(card);
      });
  }
}

/* EXTRA LEARNING INTERACTIONS */
document.querySelectorAll(".daily-opt").forEach((btn) => {
  btn.addEventListener("click", () => {
    const ok = btn.dataset.ok === "1";
    document.getElementById("dailyChallengeStatus").textContent = ok
      ? "Düzgündür! Gündəlik tapşırıq tamamlandı (+25 bal)."
      : "Yanlış cavab, yenidən yoxlayın.";
    if (ok) {
      state.user.points += 25;
      persist();
      renderDashboard();
    }
  });
});

function renderFlashcard() {
  const w = state.words[flashIdx % state.words.length];
  document.getElementById("flashcardFront").textContent = w.ka;
  document.getElementById("flashcardBack").textContent = `${w.az} (${w.tr})`;
  document.getElementById("flashcardBack").classList.add("hidden");
}

document.getElementById("flipFlashcardBtn").addEventListener("click", () => {
  document.getElementById("flashcardBack").classList.toggle("hidden");
});
document.getElementById("flashcardBox").addEventListener("click", () => {
  document.getElementById("flashcardBack").classList.toggle("hidden");
});
document.getElementById("speakFlashcardBtn").addEventListener("click", () => {
  const w = state.words[flashIdx % state.words.length];
  speakGeorgian(w.ka);
});
document.getElementById("nextFlashcardBtn").addEventListener("click", () => {
  flashIdx++;
  renderFlashcard();
});

/* DASHBOARD & SUBSCRIPTION */
function renderDashboard() {
  document.getElementById("dashUserName").textContent = state.user.name;
  document.getElementById("dashUserEmail").textContent =
    `ID: #${state.user.id} · ${state.user.email} · E-poçt ${state.user.verified ? "təsdiqlənib ✓" : "gözləmədə"}`;
  const st = document.getElementById("dashSubStatus");
  st.textContent = state.user.subscriptionActive ? "Aktiv Abunəlik (15 GEL)" : "Abunəlik Ləğv Edilib";
  st.classList.toggle("cancelled", !state.user.subscriptionActive);

  document.getElementById("kpiWatched").textContent = String(state.watched.length);
  document.getElementById("kpiCompleted").textContent = String(state.watched.length);
  document.getElementById("kpiLearnedWords").textContent = String(state.words.filter((w) => w.learned).length);
  document.getElementById("kpiPoints").textContent = String(state.user.points);

  const actList = document.getElementById("activityHistoryList");
  actList.innerHTML = "";
  state.activities.slice(0, 5).forEach((a) => {
    const li = document.createElement("li");
    li.textContent = a;
    actList.appendChild(li);
  });

  const payBody = document.getElementById("paymentsTableBody");
  payBody.innerHTML = "";
  state.payments.forEach((p) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${p.date}</td><td>${p.amount}</td><td>${p.status}</td>`;
    payBody.appendChild(tr);
  });
}

document.getElementById("subPayForm").addEventListener("submit", (e) => {
  e.preventDefault();
  state.user.subscriptionActive = true;
  state.user.autoPay = document.getElementById("autoPayChk").checked;
  const today = new Date().toISOString().slice(0, 10);
  state.payments.unshift({ date: today, amount: "15.00 GEL", status: "Təsdiqlənib" });
  state.emailLogs.unshift({ date: today, type: "Ödəniş təsdiqi", text: `${state.user.name} — 15.00 GEL ödənişi təsdiqləndi.` });
  document.getElementById("payStatusMsg").textContent = "15.00 GEL ödəniş təsdiqləndi! Bütün dərslər aktivdir.";
  persist();
  renderDashboard();
  renderPlayer();
});

document.getElementById("cancelSubBtn").addEventListener("click", () => {
  state.user.subscriptionActive = false;
  state.user.autoPay = false;
  document.getElementById("payStatusMsg").textContent = "Abunəlik ləğv edildi.";
  persist();
  renderDashboard();
  renderPlayer();
});

document.getElementById("updatePassForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("newPassField").value = "";
  document.getElementById("passUpdateMsg").textContent = "Şifrə uğurla yeniləndi.";
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  document.getElementById("authModal").classList.remove("hidden");
});

/* AUTH MODAL */
const authModal = document.getElementById("authModal");
document.getElementById("openLoginBtn").addEventListener("click", () => authModal.classList.remove("hidden"));
document.getElementById("openRegisterBtn").addEventListener("click", () => authModal.classList.remove("hidden"));
document.getElementById("closeAuthBtn").addEventListener("click", () => authModal.classList.add("hidden"));
document.getElementById("forgotPassBtn").addEventListener("click", () => {
  document.getElementById("authModalFeedback").textContent = "Şifrə yeniləmə məktubu e-poçt ünvanınıza göndərildi.";
});
document.getElementById("authModalForm").addEventListener("submit", (e) => {
  e.preventDefault();
  state.user.name = document.getElementById("authFullName").value.trim() || state.user.name;
  state.user.email = document.getElementById("authEmail").value.trim() || state.user.email;
  state.user.verified = true;
  persist();
  renderDashboard();
  renderPlayer();
  authModal.classList.add("hidden");
});

/* ADMIN PANEL (Upload your own video file or URL into any lesson) */
const adminModal = document.getElementById("adminModal");
document.getElementById("openAdminBtn").addEventListener("click", () => {
  renderAdmin();
  adminModal.classList.remove("hidden");
});
document.getElementById("closeAdminBtn").addEventListener("click", () => adminModal.classList.add("hidden"));

document.querySelectorAll(".adm-tab").forEach((t) => {
  t.addEventListener("click", () => {
    document.querySelectorAll(".adm-tab").forEach((x) => x.classList.remove("active"));
    document.querySelectorAll(".adm-pane").forEach((p) => p.classList.remove("active"));
    t.classList.add("active");
    document.getElementById(`admPane-${t.dataset.adm}`).classList.add("active");
  });
});

function renderAdmin() {
  document.getElementById("admStatUsers").textContent = String(state.users.length);
  document.getElementById("admStatVideos").textContent = String(state.lessons.length);

  const mList = document.getElementById("adminLessonsManageList");
  mList.innerHTML = "";
  state.lessons.forEach((les) => {
    const row = document.createElement("div");
    row.className = "tr-item flex-between";
    row.innerHTML = `
      <span><strong>[${les.level}] ${les.title}</strong> · ${les.videoUrl ? "Video yüklənib ✓" : "Video yeri boşdur"}</span>
      <div class="toolbar-row">
        <label class="btn-outline-dark btn-sm" style="cursor:pointer;">
          Video yüklə
          <input type="file" accept="video/*" class="hidden inline-vid-upload" />
        </label>
        <button type="button" class="btn-red btn-sm del-les-btn">Sil</button>
      </div>
    `;
    row.querySelector(".inline-vid-upload").addEventListener("change", (ev) => {
      const file = ev.target.files[0];
      if (!file) return;
      les.videoUrl = URL.createObjectURL(file);
      state.auditLogs.unshift(`${new Date().toISOString().slice(0, 16).replace("T", " ")} — «${les.title}» üçün video faylı yükləndi: ${file.name}`);
      persist();
      renderLessons();
      renderPlayer();
      renderAdmin();
    });
    row.querySelector(".del-les-btn").addEventListener("click", () => {
      state.lessons = state.lessons.filter((x) => x.id !== les.id);
      persist();
      renderLessons();
      renderAdmin();
    });
    mList.appendChild(row);
  });

  const uBody = document.getElementById("adminUsersTableBody");
  uBody.innerHTML = "";
  state.users.forEach((u, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${u.name}</td><td>${u.email}</td><td>${u.sub}</td><td>${u.blocked ? "Bloklanıb" : "Aktiv"}</td><td><button type="button" class="btn-outline-dark btn-sm">${u.blocked ? "Bloku aç" : "Blokla"}</button></td>`;
    tr.querySelector("button").addEventListener("click", () => {
      state.users[i].blocked = !state.users[i].blocked;
      persist();
      renderAdmin();
    });
    uBody.appendChild(tr);
  });

  const eLogs = document.getElementById("emailLogsList");
  eLogs.innerHTML = "";
  state.emailLogs.forEach((el) => {
    const div = document.createElement("div");
    div.className = "tr-item";
    div.innerHTML = `<strong>${el.type} · ${el.date}</strong><span>${el.text}</span>`;
    eLogs.appendChild(div);
  });

  const aLogs = document.getElementById("auditLogList");
  aLogs.innerHTML = "";
  state.auditLogs.forEach((al) => {
    const div = document.createElement("div");
    div.className = "tr-item";
    div.textContent = al;
    aLogs.appendChild(div);
  });
}

document.getElementById("adminAddLessonForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("newVidTitle").value.trim();
  const level = document.getElementById("newVidLevel").value;
  const ka = document.getElementById("newVidKa").value.trim();
  const az = document.getElementById("newVidAz").value.trim();
  const fileInput = document.getElementById("newVidFileInput");
  const urlInput = document.getElementById("newVidUrlInput").value.trim();

  let videoUrl = urlInput;
  if (fileInput.files && fileInput.files[0]) {
    videoUrl = URL.createObjectURL(fileInput.files[0]);
  }

  const newId = `v-${Date.now()}`;
  state.lessons.unshift({
    id: newId,
    level,
    bucket: "new",
    title,
    duration: "08:00",
    videoUrl,
    lastSec: 0,
    subtitles: [{ sec: 0, ka, az }],
    quiz: [{ q: document.getElementById("newVidQuizQ").value.trim() || `«${ka}» nə deməkdir?`, options: [az, "Digər variant"], correct: 0 }]
  });

  const wVal = document.getElementById("newVidWord").value.trim();
  if (wVal) {
    const [wKa, wAz] = wVal.split("-").map((s) => s.trim());
    state.words.unshift({ id: `w-${Date.now()}`, level, ka: wKa || wVal, tr: "tələffüz", az: wAz || az, example: `${ka} — ${az}`, fav: false, learned: false });
  }

  state.activeLessonId = newId;
  state.emailLogs.unshift({
    date: new Date().toISOString().slice(0, 16).replace("T", " "),
    type: "Yeni video əlavə edildi",
    text: `[${level}] ${title} — Bütün aktiv abunəçilərə göndərildi.`
  });
  state.auditLogs.unshift(`${new Date().toISOString().slice(0, 16).replace("T", " ")} — Yeni dərs yaradıldı: ${title}`);

  e.target.reset();
  persist();
  renderLessons();
  renderPlayer();
  renderLexicon();
  renderAdmin();
});

document.getElementById("sendAnnouncementBtn").addEventListener("click", () => {
  const txt = document.getElementById("customAnnouncementInput").value.trim();
  if (!txt) return;
  state.emailLogs.unshift({ date: new Date().toISOString().slice(0, 16).replace("T", " "), type: "Vacib elan", text: txt });
  document.getElementById("customAnnouncementInput").value = "";
  persist();
  renderAdmin();
});

/* FILTERS & MOBILE MENU */
document.querySelectorAll(".lvl-btn").forEach((b) => {
  b.addEventListener("click", () => {
    selectedLevel = b.dataset.level;
    document.querySelectorAll(".lvl-btn").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    renderLessons();
    renderLexicon();
  });
});

document.querySelectorAll(".lex-tab").forEach((t) => {
  t.addEventListener("click", () => {
    activeLexTab = t.dataset.lex;
    document.querySelectorAll(".lex-tab").forEach((x) => x.classList.remove("active"));
    t.classList.add("active");
    renderLexicon();
  });
});

document.getElementById("videoSearchInput").addEventListener("input", renderLessons);
document.getElementById("videoBucketFilter").addEventListener("change", renderLessons);
document.getElementById("lexSearchInput").addEventListener("input", renderLexicon);
document.getElementById("lexLevelSelect").addEventListener("change", renderLexicon);
document.getElementById("mobileMenuBtn").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

/* INIT */
renderLevels();
renderLessons();
renderPlayer();
renderLexicon();
renderFlashcard();
renderDashboard();
