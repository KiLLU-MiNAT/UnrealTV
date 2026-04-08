UnrealTV – Firebase Fix Version

Wichtig:
1. Der Login funktioniert immer lokal.
2. Echter Realtime-Chat mit Firebase funktioniert nur über http://localhost oder ein Hosting.
   Wenn du die Seite per Doppelklick als file:/// öffnest, schaltet UnrealTV automatisch auf Demo-Chat um,
   damit der Login NICHT kaputtgeht.

Firebase wird benutzt, wenn:
- firebase-config.js vorhanden ist
- Firestore aktiviert ist
- die Seite nicht im file:/// Modus läuft
- die Firestore-Regeln Lesen/Schreiben erlauben

Deine Firestore-Regeln zum Testen:
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /unrealtv_chat_rooms/{roomId}/messages/{messageId} {
      allow read, write: if true;
    }
  }
}

Start lokal mit VS Code Live Server
oder z.B. Python:
py -m http.server 5500
und dann im Browser:
http://localhost:5500


Live-Admin-Sync:
Admin-Änderungen aus dem Admin Panel werden jetzt nicht nur lokal gespeichert, sondern zusätzlich direkt in Firestore unter unrealtv_site_state/main geschrieben. Beim Laden der Website und bei Remote-Änderungen wird dieser Stand live übernommen.
