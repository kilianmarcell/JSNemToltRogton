let szin = "kek";
function szinValtas() {
    let gomb = document.getElementById("gomb");
    if (szin === "kek") {
        szin = "zold";
        gomb.classList.add("zold");
        gomb.classList.remove("kek");
    } else {
        szin = "kek";
        gomb.classList.add("kek");
        gomb.classList.remove("zold");
    }
}

let idozizoId = null;

function katt() {
    //setTimeout(szinValtas, 3000);
    stop();
    idozizoId = setInterval(szinValtas, 1000);
}

function stop() {
    clearInterval(idozizoId);
}

function init() {
    document.getElementById("gomb").addEventListener("click", katt);
    document.getElementById("stop").addEventListener("click", stop);
}

document.addEventListener("DOMContentLoaded", init);