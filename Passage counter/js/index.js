let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el"); 
let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
    
}

function save(){
    //variable qui contient le compteur et un tiret
    let countstr = count + " - ";

    //Ajouter le compteur au texte de sauvegarde
    saveEl.textContent += countstr;

    //Réinitialiser le compteur
    countEl.textContent = 0;
    
}