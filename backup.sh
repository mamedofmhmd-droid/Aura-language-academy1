#!/bin/bash
DATE=$(date +%F_%H-%M)
docker exec -t $(docker ps -qf "name=db") pg_dump -U aura_user aura_georgian > /root/backups/aura_georgian_$DATE.sql
