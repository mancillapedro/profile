<template>
  <v-app>
    <v-parallax
      dark
      src="@/assets/material.jpg"
      :height="heightParallax"
      :style="{ 'margin-bottom': pixelMarginParallaxPixel }"
    />
    <v-main>
      <v-container>
        <card-component />
        <works-component />
        <contact-component />
      </v-container>
    </v-main>
    <footer-component v-if="false" />
  </v-app>
</template>

<script>
import CardComponent from "./components/CardComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import WorksComponent from "./components/WorksComponent.vue";

export default {
  name: "App",
  components: {
    FooterComponent,
    CardComponent,
    WorksComponent,
    ContactComponent,
  },
  data: () => ({
    heightParallax: 0,
    marginParallax: 0,
    marginInicial: 0,
  }),
  computed: {
    pixelMarginParallaxPixel() {
      return `${this.marginParallax}px`;
    },
  },
  methods: {
    handleScroll() {
      this.marginParallax = window.scrollY * -0.75 + this.marginInicial;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.heightParallax = document.documentElement.clientHeight * 0.66;
    this.marginInicial = (this.heightParallax - 150) * -1;
    this.marginParallax = this.marginInicial;
  },
};
</script>