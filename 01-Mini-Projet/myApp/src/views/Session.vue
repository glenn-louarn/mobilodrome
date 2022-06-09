<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>Session</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content>
        <h2 ion-text color="primary">{{session.title}}</h2>
        <h3 ion-text color="primary">{{session.category}}</h3>
        <p ion-text color="primary">{{session.description}}</p>

        <h3 ion-text color="primary">Speakers</h3>
        <ion-item v-for="speaker in speakers" :key="speaker.id">
            <ion-avatar slot="start">
                <img :src="'https://devfest2018.gdgnantes.com/'+speaker.photoUrl"  />
            </ion-avatar>
            <ion-label>
                <h2>{{speaker.name}}</h2>
                <h3>{{speaker.company}}</h3>
            </ion-label>
        </ion-item>
        <ion-button>
            Mes notes
        </ion-button>
    </ion-content>
</ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import {  IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Tab2Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent },
  setup :() => {
    const session = ref([])
    const speakers = ref([] as Array<any>)
    const route = useRoute()
    onMounted(async () => {
        await fetch('https://devfest-nantes-2018-api.cleverapps.io/sessions')
            .then(response => response.json())
            .then(data => {
                const idSession = route.params.idSession as string
                session.value = data[idSession]
                console.log(session.value)
            });
        await fetch('https://devfest-nantes-2018-api.cleverapps.io/speakers')
            .then(response => response.json())
            .then(data => {

console.log("data : ",data[108])

                var speakersList = ((session.value) as any).speakers
                for (var key in speakersList){
                    var speakerId = speakersList[key];
                    
                    var mySpeaker  = data[speakerId]
                    speakers.value.push(mySpeaker)
                }
            });
            
    });
    return {session, speakers};
    }
});
</script>

<style scoped>
.imgAvatar{
    width: 50px;
    height: 50px;
}
</style>
