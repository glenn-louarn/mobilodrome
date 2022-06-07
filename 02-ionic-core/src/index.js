// chargement de la CSS du Framework Ionic
import '@ionic/core/css/ionic.bundle.css'

import {defineCustomElements} from "@ionic/core/loader"

const init = async () => {
    // chargement de tous les composants
    // la démarche n'est pas optimale car nous importons tous les composants
    await defineCustomElements()

    fetch('https://devfest-nantes-2018-api.cleverapps.io/blog')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    var list = document.getElementById('listcard');
    data.forEach(card => {
        console.log(card)
        card = "<ion-card><img src=\"https://devfest2018.gdgnantes.com/"+card.image+"\" /><ion-card-header> <ion-card-title>"+card.title+"</ion-card-title> </ion-card-header><ion-card-content>"+card.brief+"</ion-card-content></ion-card>"
        list.innerHTML += card
    });
});

}

init()