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

function katt() {
    setTimeout(szinValtas, 3000);
}

function init() {
    document.getElementById("gomb").addEventListener("click", katt);
}

document.addEventListener("DOMContentLoaded", init);