<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="public/assets/cookioLogo.png" alt="Logo" width="80" height="80">

  <h3 align="center">Cookio - Delivery App - User frontend and Admin panel</h3>

  <p align="center">
    <br />
    <a href="https://user-cookio.vercel.app/">Guarda la demo utente</a>
    ·
    <a href="https://admin-cookio.vercel.app/">Guarda la demo Admin</a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Indice</summary>
  <ol>
    <li>
      <a href="#about-the-project">Informazioni sul progetto</a>
      <ul>
        <li><a href="#user-front">User Front End</a></li>
        <li><a href="#admin-front">Admin Front End</a></li>
        <li><a href="#backend">Back End</a></li>
        <li><a href="#built-with">Tecnologie utilizzate</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Iniziare</a>
      <ul>
        <li><a href="#prerequisites">Prerequisiti</a></li>
        <li><a href="#installation">Installazione</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#features">Funzionalità</a></li>
    <li><a href="#dependencies">Dipendenze</a></li>
    <li><a href="#contact">Contatti</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
<a id="about-the-project"></a>
## Informazioni sul progetto ⭐
<a id="user-front"></a>
### User Front End
[![User Front End Screen Shot][user-frontend-screenshot]](https://user-cookio.vercel.app/)

Questo sito web è ispirato a molte app di consegna come Deliveroo, Just Eat, ecc.  
L'idea nasce da un servizio immaginario di consegna di cibo chiamato Cookio. Tutti gli asset sono stati generati dall'AI, forniti da diverse fonti o modificati da me usando Photoshop per adattarli alle mie esigenze.

Quando entri nel sito web, vedrai l'intestazione con la navbar. La navbar ti seguirà mentre scorri verso il basso. Ho preso questa decisione per semplificare la navigazione, in modo che gli utenti possano accedere facilmente al menu in qualsiasi momento. Nella navbar, il logo è posizionato in alto a sinistra, mentre al centro puoi passare tra Home, Menu o saltare direttamente al footer. In alto a destra, c'è l'icona del carrello e la possibilità di registrarsi o effettuare il login. Una volta effettuato il login, il pulsante di login viene sostituito con l'icona dell'utente. Quando ci passi sopra, appare un menu a discesa che ti permette di visualizzare i tuoi ordini (se ne hai effettuati) o disconnetterti.

L'immagine dell'intestazione è generata dall'AI e tutto il testo è stato scritto da me per essere visivamente attraente e coinvolgente. C'è anche un pulsante che ti porta direttamente al menu. Scorrendo verso il basso, vedrai una sezione che spiega come funziona il sito, seguita da un'opzione per installare l'app mobile (se disponibile), e infine il footer con tutte le informazioni necessarie.

Nella sezione Menu, puoi navigare e ordinare il cibo. Puoi cercare piatti per categoria, aggiungerli utilizzando il pulsante "+" e rimuoverli quando necessario. Tutto è connesso al backend, garantendo aggiornamenti in tempo reale. Se aggiungi un articolo, appare immediatamente nel carrello con il suo prezzo.

Una volta selezionato tutto ciò che desideri acquistare, puoi procedere al Carrello. Qui vedrai le immagini dei piatti selezionati, i loro nomi, i prezzi, le quantità, il costo totale e un'opzione per rimuoverli. Il pulsante "Procedi al pagamento" sarà attivato solo se hai articoli nel carrello e sei loggato.

Procedendo, verrai indirizzato a una pagina in cui inserire il tuo indirizzo, email e numero di telefono prima di completare il pagamento. Ho integrato Stripe per i pagamenti, anche se non è completamente configurato. Ho usato una carta di test fornita da Stripe. Ci sono due possibili esiti:

* Se il pagamento viene rifiutato per qualsiasi motivo, verrai reindirizzato alla homepage.
* Se il pagamento ha successo, verrai portato alla pagina Ordini, dove potrai tracciare il tuo ordine, che sia in preparazione, in transito o già consegnato.
Tutto è connesso al pannello di amministrazione, garantendo una gestione fluida degli ordini.

<a id="admin-front"></a>
### Admin Front End
[![Admin End Screen Shot][admin-frontend-screenshot]](https://admin-cookio.vercel.app/)

Nel pannello di amministrazione, hai il controllo completo sul menu e sugli ordini degli utenti.

Gestisci gli articoli del menu:  
Con il primo pulsante, puoi aggiungere o rimuovere un piatto dal menu. Per aggiungere un nuovo elemento, basta fornire:

* Un'immagine del piatto  
* Il nome del prodotto  
* Una breve descrizione  
* La categoria del cibo  
* Il prezzo  
Una volta aggiunto, il nuovo piatto sarà disponibile nel menu per gli utenti.

Visualizza e rimuovi articoli:  
Il secondo pulsante mostra un elenco di tutti gli articoli del menu, inclusi i loro dettagli. Da qui, puoi rivedere gli elementi esistenti e rimuovere un piatto se necessario.

Gestisci ordini:  
Il terzo pulsante mostra tutti gli ordini attivi effettuati dagli utenti. Come amministratore, puoi aggiornare lo stato dell'ordine in qualsiasi momento, tracciandone il progresso dalla preparazione alla consegna.

<a id="backend"></a>
### Back End

Il back end è realizzato con Node.js, Express e MongoDB.  
* config – Contiene la configurazione della connessione al database usando Mongoose.  
* middleware – Gestisce l'autenticazione dell'utente per il sito web.  
* models – Definisce tutti gli schemi Mongoose utilizzati per archiviare i dati nell'API.  
* controllers – Gestisce la logica di business principale e le interazioni tra il frontend e il database.  
* routes – Definisce gli endpoint API e li collega ai rispettivi controller.  
* server.js – Il punto di ingresso del backend, dove viene implementata la logica dell'API e avviato il server.  
* uploads – Contiene tutte le immagini dei cibi caricate nel pannello di amministrazione.

Questo approccio strutturato garantisce scalabilità, manutenzione e una buona organizzazione del codice.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a id="built-with"></a>
### Tecnologie utilizzate 🔨

Questa sezione mostra con cosa ho costruito il mio progetto, MERN è una stack tecnologica pre-costruita basata su tecnologie JavaScript. MERN sta per MongoDB, Express, React e Node, le quattro tecnologie chiave che compongono la stack.

* [![React][React.js]][React-url]  
* [![Vite][Vite.js]][Vite-url]  
* [![Node.js][Node.js]][Node-url]  
* [![Express.js][Express.js]][Express-url]  
* [![MongoDB][MongoDB.com]][MongoDB-url]  
* [![Stripe][Stripe.com]][Stripe-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING -->
<a id="getting-started"></a>
## Iniziare 🔢

Per ottenere una copia locale e avviare il progetto, segui questi semplici passaggi.

### Prerequisiti

Ecco un esempio di come elencare le cose di cui hai bisogno per usare il software e come installarle.  
* npm  
  ```sh
  npm install npm@latest -g
Installazione
Clona il repository nel tuo editor

sh
Copia
Modifica
git clone https://github.com/konnychiwa/Start2impact-progetto-FullStack.git
Apri il terminale nel tuo editor

Installa i pacchetti NPM in tutte e 3 le cartelle

sh
Copia
Modifica
cd frontend
npm install
sh
Copia
Modifica
cd ../admin
npm install
sh
Copia
Modifica
cd ../backend
npm install
Configura le variabili d'ambiente

sh
Copia
Modifica
cd backend
Crea un file .env nella cartella e aggiungi

js
Copia
Modifica
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
STRIPE_SECRET_KEY=your_stripe_secret_key  
Qui, dovresti definire tutte le variabili d'ambiente necessarie, come:

la stringa di connessione MongoDB creata creando un cluster su https://www.mongodb.com
JWT secret, è il metodo che vuoi usare per criptare la password degli utenti
Chiave segreta di Stripe (puoi trovarla su https://dashboard.stripe.com/test/apikeys)
Avvia il progetto

Avvia il backend:

sh
Copia
Modifica
cd backend  
npm run dev
Avvia il frontend dell'utente:

sh
Copia
Modifica
cd frontend  
npm run dev
Avvia il frontend dell'amministratore:

sh
Copia
Modifica
cd admin  
npm run dev
Il progetto dovrebbe ora essere attivo e funzionante.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<a id="usage"></a>

Uso
Puoi ora avviare il progetto in locale. La home dell'utente sarà su http://localhost:5173, mentre quella dell'amministratore sarà su http://localhost:5174. Inizia a testare le funzionalità come descritto nella sezione delle funzionalità.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<a id="features"></a>

Funzionalità ✨
La pagina Home ha una sezione introduttiva e un menu facilmente navigabile.
Gli utenti possono selezionare e aggiungere piatti al carrello.
Gli utenti possono visualizzare il loro carrello e proseguire al pagamento con Stripe.
I pannelli di amministrazione permettono di aggiungere e rimuovere piatti dal menu e visualizzare gli ordini.
<p align="right">(<a href="#readme-top">back to top</a>)</p>
<a id="dependencies"></a>

Dipendenze
bcrypt: ^5.1.1 Cripta le password in modo sicuro utilizzando l'algoritmo bcrypt.
body-parser: ^1.20.3 Middleware per analizzare i corpi delle richieste in entrata (JSON, dati URL-encoded).
cors: ^2.8.5 Abilita il Cross-Origin Resource Sharing (CORS) per consentire l'accesso all'API da origini diverse.
dotenv: ^16.4.7 Carica le variabili d'ambiente da un file .env.
express: ^4.21.2 Un framework Node.js minimalista e flessibile per costruire API e applicazioni web.
jsonwebtoken: ^9.0.2 Utilizzato per l'autenticazione tramite JSON Web Tokens (JWT).
mongoose: ^8.9.6 Una libreria ODM (Object Data Modeling) per MongoDB, che semplifica le interazioni con il database.
multer: ^1.4.5-lts.1 Middleware per gestire il caricamento dei file in Node.js.
nodemon: ^3.1.9 Riavvia automaticamente il server quando rileva modifiche ai file (utile per lo sviluppo).
stripe: ^16.12.0 Gestisce i pagamenti in modo sicuro tramite l'API di Stripe.
<p align="right">(<a href="#readme-top">back to top</a>)</p>
<a id="contact"></a>

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pamoda-angelo-konara/

[user-frontend-screenshot]: public/assets/frontend.png
[admin-frontend-screenshot]: public/assets/admin.png

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB  
[React-url]: https://reactjs.org/  
[Vite.js]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white  
[Vite-url]: https://vitejs.dev/  
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white  
[Node-url]: https://nodejs.org/  
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white  
[Express-url]: https://expressjs.com/  
[MongoDB.com]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white  
[MongoDB-url]: https://www.mongodb.com/  
[Stripe.com]: https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white  
[Stripe-url]: https://stripe.com/  
