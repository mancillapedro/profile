<template>
  <div id="RedesSocialesComponent">
    <v-hover v-for="(icon, i) in icons" :key="i">
      <template v-slot:default="{ hover }">
        <v-btn
          class="mx-md-2 icons_rrss"
          :elevation="hover ? 6 : 0"
          fab
          icon
          tile
          small
          href="#"
          target="_blank"
          v-html="icon.svg"
          :style="icon.style"
        />
      </template>
    </v-hover>
  </div>
</template>

<script>
import {
  siCodewars,
  siHackerrank,
  siGithub,
  siLinkedin,
  siSololearn,
  siFreecodecamp,
} from "simple-icons/icons";

export default {
  name: "RedesSocialesComponent",

  data: () => ({
    icons: [
      {
        svg: siCodewars.svg,
        style: { fill: `#${siCodewars.hex}` },
        url: "www.ww",
      },
      {
        svg: siHackerrank.svg,
        style: { fill: `#${siHackerrank.hex}` },
        url: "www.ww",
      },
      {
        svg: siGithub.svg,
        style: { fill: `#${siGithub.hex}` },
        url: "www.ww",
      },
      {
        svg: siLinkedin.svg,
        style: { fill: `#${siLinkedin.hex}` },
        url: "www.ww",
      },
      {
        svg: siSololearn.svg,
        style: { fill: `#${siSololearn.hex}` },
        url: "www.ww",
      },
      {
        svg: siFreecodecamp.svg,
        style: { fill: `#${siFreecodecamp.hex}` },
        url: "www.ww",
      },
    ],
  }),
};
</script>