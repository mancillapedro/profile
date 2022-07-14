<template>
  <v-app>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      :height="heightParallax"
      :style="{ 'margin-bottom': pixelMarginParallaxPixel }"
    />
    <v-main>
      <v-container>
        <card-component />
        <works-component v-if="false" />
      </v-container>
    </v-main>
    <footer-component v-if="false" />
  </v-app>
</template>

<script>
import CardComponent from "./components/CardComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import WorksComponent from "./components/WorksComponent.vue";

export default {
  name: "App",
  components: { FooterComponent, CardComponent, WorksComponent },
  data: () => ({
    heightParallax: 400,
    marginParallax: -250,
  }),
  computed: {
    pixelMarginParallaxPixel() {
      return `${this.marginParallax}px`;
    },
  },
  methods: {
    handleScroll() {
      this.marginParallax = window.scrollY * -0.75 - 250;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
.icons_rrss {
  filter: grayscale(100%);
  &:hover {
    filter: none;
  }
  & > * {
    height: 1.5rem;
  }
}
</style>