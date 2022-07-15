<template>
  <button @click="slider.toggle()">¡Pruébame!</button>
</template>

<script>
import { createSlider } from "@typeform/embed";
import "@typeform/embed/build/css/slider.css";

export default {
  name: "ContactComponent",

  data: () => ({
    slider: createSlider("uE4aLeJi", {
      slider: "uE4aLeJi",
      width: document.documentElement.scrollWidth * 0.666,
      hideHeaders: true,
      position: "right",
      medium: "snippet",
    }),
  }),
};
</script>
