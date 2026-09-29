# T1 — Purge du sitemap.xml résiduel (isPending + 1 erreur) pour VAPELT.
# Garde sitemap-index.xml (sain). Idempotent : si déjà supprimé, OK.
import json, os, sys, time
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
HERE = os.path.dirname(os.path.abspath(__file__))

import google.auth.transport.requests
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

tok = json.load(open(os.path.join(HERE, "gsc-token-vapelt.json"), encoding="utf-8"))
creds = Credentials(None, refresh_token=tok["refresh_token"], token_uri=tok["token_uri"],
                    client_id=tok["client_id"], client_secret=tok["client_secret"], scopes=tok["scopes"])
for _ in range(4):
    try:
        creds.refresh(google.auth.transport.requests.Request())
        break
    except Exception as e:
        print(f"(token refresh retry: {type(e).__name__})")
        time.sleep(6)

svc = build("webmasters", "v3", credentials=creds)
SITE = "https://vapelt.dealsnows.com/"
OLD = "https://vapelt.dealsnows.com/sitemap.xml"

# 1) Purger l'ancien sitemap.xml
try:
    svc.sitemaps().delete(siteUrl=SITE, feedpath=OLD).execute()
    print(f"✅ SITEMAP SUPPRIMÉ : {OLD}")
except Exception as e:
    print(f"(delete: {type(e).__name__}: {e})")

print()
print("== SITEMAPS RESTANTS ==")
sm = svc.sitemaps().list(siteUrl=SITE).execute()
for s in sm.get("sitemap", []):
    print("-", s.get("path"),
          "| isPending:", s.get("isPending"),
          "| errors:", s.get("errors"),
          "| warnings:", s.get("warnings"))