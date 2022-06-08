<template>
  <ion-app> 
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="nav-list">
            <ion-list-header @click="$router.push({path:'/'})" >DevFest 2018</ion-list-header>
            <!-- <ion-note>Session</ion-note> -->
            <ion-menu-toggle auto-hide="false" >
              <ion-button @click="$router.push({path:'/tabs/tab1'})"  lines="none" detail="false" class="hydrated" >
                <ion-label>Sessions</ion-label>
              </ion-button>
              <ion-button  @click="() => router.push('/sessions')">Go to detail</ion-button>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
import { 
    IonApp,
    IonContent,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonRouterOutlet,
    IonSplitPane,
} from '@ionic/vue';
import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonContent,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonRouterOutlet,
    IonSplitPane,
  },
  setup:()=> {

      const router = useRouter();
      return { router };
  }
});
</script>