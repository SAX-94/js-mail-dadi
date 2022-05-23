// @ts-nocheck
/* Dopo aver chiesto all'utente di inserire la propria
mail nell'apposito spazio, lo script dovrà verificare se 
essa è presente nella array delle email degli iscritti.*/

const registeredMembers = [
    "quentin.tarantino@gmail.com",
    "david.fincher@gmail.com",
    "brad.pitt@gmail.com",
    "mike.tyson@gmail.com",
    "saul.alvarez@gmail.com",
    "elliot.alderson@gmail.com",
    "tyler.durden@gmail.com"
]


const btnAccedi = document.querySelector("#accedi");
const content = document.querySelector(".content");

btnAccedi.addEventListener("click", function () {
    let found = false;
    // @ts-ignore
    const email = document.getElementById("textEmail").value;
    for (let i = 0; i < registeredMembers.length; i++) {
        if (email === registeredMembers[i]) {
            found = true;
        }
    }
    if (found) {
        content.innerHTML = `<div class="badge rounded-pill bg-primary mb-3">Accesso riuscito!</div>`
    }
    else {
        content.innerHTML = `<div class="badge rounded-pill bg-warning text-dark">L'accesso non ti è consentito.</div>`;
    }
});
