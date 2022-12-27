//VARIABLES
let myLeads = [];
const inputEl = document.getElementById("input-el");
const btnInput = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveBtn = document.getElementById("save-btn");

const tabs = [];

//On récupère les données du local storage

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

//Si il y a des données dans le local storage,
// on les ajoute à la liste myLeads

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
};


//METHODS

saveBtn.addEventListener("click", function() {
    //On récupère l'url de l'onglet actif et on l'ajoute à la liste myLeads
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push (tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads(myLeads);
        });
});


//On supprime les données du local storage 
//lors du double click sur le bouton Supprimer
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
    
});


btnInput.addEventListener("click", function() {
    myLeads.push(inputEl.value);

    //On remet le champ input à vide
    inputEl.value = "";

    //On enregistre les données dans le local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
});



function renderLeads(leads) {
    let listItem = "";
    for (let i = 0; i < leads.length; i++) {

        //On permet à chaque lien d'être cliquable et ouvrable dans un nouvel onglet
        listItem += `<li> 
        <a href=${leads[i]} target="_blank">
        ${leads[i]}
        </a>
        </li>`;
    }
    ulEL.innerHTML = listItem;
}



