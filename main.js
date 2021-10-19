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

function katt(e) {
    console.log(e.x);
    console.log(e.y);

    //setTimeout(szinValtas, 3000);
    stop();
    idozizoId = setInterval(szinValtas, 1000);
}

function stop() {
    clearInterval(idozizoId);
}

function emailMegvaltozott() {
    document.getElementById("emailHossz").innerHTML = document.getElementById("email").value.length;
}

function billentyu(e) {
    if (e.key === "w") {
        console.log("elore")
    }
}

function init() {
    document.getElementById("gomb").addEventListener("click", katt);
    document.getElementById("stop").addEventListener("click", stop);

    //document.getElementById("email").addEventListener("input", emailMegvaltozott);
    document.getElementById("email").addEventListener("change", emailMegvaltozott);
    document.getElementById("email").addEventListener("keydown", billentyu);
}

document.addEventListener("DOMContentLoaded", init);