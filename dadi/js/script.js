/* Lo script eve generare due numeri random compresi fra 1 e 6.
Il numero più alto vince. */


const btnLancia = document.querySelector("#lancia");
const content = document.querySelector(".content");
let countWin = 0, countDefeats = 0;

btnLancia.addEventListener("click", function () {
    btnLancia.classList.remove("btn-lg");
    const dadoPlayer = Math.ceil(Math.random() * 6);
    const dadoPC = Math.ceil(Math.random() * 6);
    let verdict;

    if (dadoPlayer > dadoPC) {
        countWin++;
        verdict = "Hai vinto!"
    }
    else if (dadoPlayer < dadoPC) {
        countDefeats++;
        verdict = "Hai perso!";
    }
    else {
        verdict = "Pareggio!";
    }

    content.innerHTML = `<aside id="left" class="text-center">
                            <h3>Computer</h3>
                            <h3><span class="badge bg-danger">${dadoPC}</span></h3>
                        </aside>
                        <section id="center" class="text-center">
                        <h1><span class="badge bg-danger">${verdict}</span></h1>                        
                        </section>
                        <aside id="right" class="text-center">
                            <h3>Tu</h3>
                            <h3><span class="badge bg-primary">${dadoPlayer}</span></h3>
                        </aside>`
});