// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.






// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

//id del form
const kmField = document.getElementById("km-field");
const ageField = document.getElementById("age-field");
const usernameField = document.getElementById("username-field");
const formEl = document.querySelector("form");

//id della card
const km = document.getElementById("km");
let age = document.getElementById("age");
let username = document.getElementById("username");
let priceTicketDef = document.getElementById("price");


function getPrice (e){
    e.preventDefault();
    console.log(kmField.value);
    console.log(ageField.value);
    console.log(usernameField.value);

    //valori dei campi di input del form
    let userNameValue = usernameField.value;
    const kmFieldValue = kmField.value;
    const ageFieldValue = ageField.value;

    const priceTicket = (0.21*kmFieldValue).toFixed(2);

    username.innerHTML = userNameValue;

    if (ageFieldValue.includes("Minorenne")){
        priceTicketDef.innerHTML = ((priceTicket)-(priceTicket*0.20)+ " €");  
        age.innerHTML = ageFieldValue; 

        console.log(age);
            
    } else if (ageFieldValue .includes("Over 65")){
        priceTicketDef.innerHTML = ((priceTicket)-(priceTicket*0.40)+ " €");
        age.innerHTML = ageFieldValue;     
    } else {      
        priceTicketDef.innerHTML = priceTicket + " €";
        age.innerHTML = ageFieldValue;  
    }    
    
}

formEl.addEventListener('submit', getPrice);




// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.