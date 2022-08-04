<template>
  <div></div>
</template>

<script>
import { createSidetab } from "@typeform/embed";

export default {
  name: "ContactComponent",
  created() {
    createSidetab("uE4aLeJi", {
      slider: "uE4aLeJi",
      medium: "ContactProfile",
      buttonText: "Conéctate conmigo",
      buttonColor: "#2979FF",
      customIcon: `<i class="v-icon notranslate mdi mdi-message-text"></i>`,
    });
  },
};
</script>

<style lang="scss">
@import "@typeform/embed/build/css/sidetab.css";
</style>
