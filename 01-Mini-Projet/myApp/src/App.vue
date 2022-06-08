<template>
  <ion-app> 
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="nav-list">
            <ion-button href="/" >DevFest 2018</ion-button>
            <!-- <ion-note>Session</ion-note> -->
            <ion-menu-toggle auto-hide="false" >
              <ion-button  href="/sessions"  lines="none" detail="false" class="hydrated" >
                <ion-label>Sessions</ion-label>
              </ion-button>
            </ion-menu-toggle>
            <!-- <ion-menu-toggle auto-hide="false" >
              <ion-button @click="$router.push({name:'sessions'})" lines="none" detail="false" class="hydrated" >
                <ion-label>Téléphone</ion-label>
              </ion-item>
            </ion-menu-toggle> -->
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