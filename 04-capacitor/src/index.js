// chargement de la CSS du Framework Ionic
import '@ionic/core/css/ionic.bundle.css'

import {
    defineCustomElements
} from "@ionic/core/loader"

import {
    Camera,
    CameraResultType
} from '@capacitor/camera';

import {
    defineCustomElements as pwaElements
} from '@ionic/pwa-elements/loader';

import {
    Storage
} from '@capacitor/storage';



customElements.define('modal-page', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
  <ion-header>
    <ion-toolbar>
      <ion-title>Création d'un article privé</ion-title>
      <ion-buttons slot="primary">
        <ion-button id="btnDismissModal">
        X
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
        <ion-label>Titre</ion-label>
        <ion-textarea placeholder="Title..." id="titleTextArea"></ion-textarea>
        <ion-label>Description</ion-label>
        <ion-textarea placeholder="Description..." id="descriptionTextArea"></ion-textarea>
    </ion-item>
    <ion-button id="btnSave">Enregistrer</ion-button>
  </ion-content>`;
  document.getElementById('btnSave').onclick = async () => await save()
  document.getElementById('btnDismissModal').onclick = () =>dismissModal()
    }
});

function presentModal() {
    // create the modal with the `modal-page` component
    const modalElement = document.createElement('ion-modal');
    modalElement.component = 'modal-page';
    modalElement.cssClass = 'my-custom-class';

    // present the modal
    document.body.appendChild(modalElement);
    return modalElement.present();
}
async function save() {
    const title = document.getElementById('titleTextArea').value;
    const description = document.getElementById('descriptionTextArea').value;

    const image = await Storage.get({
        key: 'tempo'
    });
    addImage(title, description,image.value )
    var list = document.getElementById('listcard');
    var card = "<ion-card><img src=\""+image.value+
        "\" /><ion-card-header> <ion-card-title>" + title +
        "</ion-card-title> </ion-card-header><ion-card-content>" + description +
        "</ion-card-content></ion-card>"
    list.innerHTML += card

    dismissModal()
}

function dismissModal() {
    // create the modal with the `modal-page` component
    const modalElement = document.getElementById('ion-overlay-1');

    // present the modal
    document.body.removeChild(modalElement);
    return modalElement.present();
}

const addImage = async (title, description, image) => {
    await Storage.set({
        key: title,
        value: {
            title: title,
            description: description,
            image: image
        },
    });
};

const checkImage = async (title) => {
    const {
        value
    } = await Storage.get({
        key: title
    });
};

const removeImage = async (title) => {
    await Storage.remove({
        key: title
    });
};


pwaElements(window)

var btn = document.getElementById('btnPhoto');
btn.onclick = async () => {
    const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
    });

    
    await Storage.set({
        key: 'tempo',
        value : image.webPath})
    // Can be set to the src of an image now
    presentModal()
};



const init = async () => {
    // chargement de tous les composants
    // la démarche n'est pas optimale car nous importons tous les composants
    await defineCustomElements()
}

init()


