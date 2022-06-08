<template>
  <ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>Home</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content>
      Home

    </ion-content>

</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent } from '@ionic/vue';

export default  defineComponent({
  name: 'Home',
  components: { IonContent }
});
</script>
