# PROGI-projekt-G2.4
Projekt iz predmeta "Programsko inženjerstvo"

GearShare je web platforma za iznajmljivanje sezonske sportske opreme, koja omogućuje trgovcima objavu oglasa, a korisnicima jednostavno pretraživanje i rezervaciju opreme.

## Glavne funkcionalnosti
- Registracija i prijava korisnika (OAuth 2.0)
- Pretraživanje i filtriranje oglasa
- Rezervacija opreme i plaćanje
- Ocjene i recenzije trgovaca
- Administracija korisnika i članarina

## Tehnologije
- Frontend: React.js
- Backend: Spring Boot
- Baza podataka: PostgreSQL
- Deploy: Railway (backend i baza), Render (frontend)
- Autentifikacija: Google OAuth 2.0
  
Pristup stranici: https://gearshare-tim-aight.onrender.com

Deployan backend: https://gearshare-tim-aight-fork-backend-deploy-dev.up.railway.app

## Za lokalni pristup stranici:

### Frontend

Pozicionirajte se u direktorij src/gearshare-frontend

U tom direktoriju stvorite datoteku .env.development i u nju pohranite sljedeće dvije vrijednosti:

VITE_API_BASE_URL=http://localhost:8080/api

VITE_BACKEND_URL=http://localhost:8080

Potom pokrenite sljedeću naredbu:

$ npm install && npm run dev

### Backend

Preduvjet za pokretanje backenda je instaliranje JDK 17 i Apache Maven.

Potrebno je stvoriti datoteku .env u direktoriju src/gearshare te u nju unijeti sljedeće podatke:

DATABASE_URL=jdbc:postgresql://nozomi.proxy.rlwy.net:12927/railway

DATABASE_PASS=QFLmqVPjUlnkZGBVvRNtgpWokcaJTcnD

BACKEND_URL=http://localhost:8080

FRONTEND_URL=http://localhost:5173

CLIENT_ID=472011653271-v89pul1lhh0jksvfmtdbq4m28ier0ng6.apps.googleusercontent.com

CLIENT_SECRET=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

Ukoliko ste Windows korisnik, iz direktorija src/gearshare pokrenite sljedeću naredbu u terminalu:

$ mvnw.cmd spring-boot:run

Za Linux i Mac korisnike, naredba glasi

$ ./mvnw spring-boot:run

Wiki i dokumentacija: [GitHub Wiki](https://github.com/strahimir/GearShare-Tim-AIGHT/wiki)

## Autori
- Matija Antun Dürrigl
- Nikola Kramarić
- Potjeh Jureković
- Laura Lučin
- Lani Miliša
