<template>
  <ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>Sessions</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content>
        <div v-for="session in sessions"  :key="session.id">

                <ion-button @click="$router.push({path:'/session/'+session.id})" :router-link="'/session/'+session.id">{{session.title}}</ion-button>
        </div>
    </ion-content>
</ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { IonPage,IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'Tab2Page',
  components: { IonPage,IonHeader, IonToolbar, IonTitle, IonContent },
  setup :() => {
    const sessions = ref([] as Array<any>);
        onMounted(async () => {
           await fetch('https://devfest-nantes-2018-api.cleverapps.io/sessions')
                .then(response => response.json())
                .then(data => {
                    console.log("sessions ,",data)
                    for (var key in data){
                        var session : any = data[key];
                        sessions.value.push(session)
                    }
                });
        });
        return {
            sessions,
        };
    }
});
</script>
