let pseudo = document.querySelector("#pseudo");
let email = document.querySelector("#mail");
let motdepasse = document.querySelector("#mdp");
let motdepassecheck = document.querySelector("#mdpcheck");

let mailvalide = false
let champvidepseudo = false
let motdepassevalide = false
let formulairevalide = false


function vide() {
    if (pseudo.value === '') {
        document.querySelector("#incorrect").innerHTML = "Pseudo requis"

    }
    else {
        document.querySelector("#incorrect").innerHTML = ""
        champvidepseudo = true
    }
    formulairevalider()
}

function mailnonvalide() {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) == false) {
        document.querySelector("#incorrect").innerHTML = "Email non valide"
    }
    else {
        document.querySelector("#incorrect").innerHTML = ""
        mailvalide = true
    }
    formulairevalider()
}


function motdepasseok() {
    if (motdepasse.value != motdepassecheck.value) {
        document.querySelector("#incorrect2").innerHTML = "Mot de passe différent"
    }
    else {
        document.querySelector("#incorrect2").innerHTML = ""
        motdepassevalide = true
    }
    formulairevalider()

}

function formulairevalider() {
    console.log(mailvalide)
    console.log(motdepassevalide)
    console.log(champvidepseudo)
    if (mailvalide == true && motdepassevalide == true && champvidepseudo == true) {
        document.querySelector("#button").disabled = false;
    }

}
email.addEventListener("keyup", mailnonvalide)
motdepassecheck.addEventListener("keyup", motdepasseok)
pseudo.addEventListener("keyup", vide)
document.querySelector("#button").disabled = true;
