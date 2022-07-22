<template>
  <div id="RedesSocialesComponent">
    <v-hover v-for="({ url, svg, style }, i) in icons" :key="i">
      <template v-slot:default="{ hover }">
        <v-btn
          class="mx-md-2 icons_rrss"
          :elevation="hover ? 6 : 0"
          fab
          icon
          tile
          small
          :href="url"
          target="_blank"
          v-html="svg"
          :style="style"
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
  // siFreecodecamp,
} from "simple-icons/icons";

export default {
  name: "RedesSocialesComponent",
  data: () => ({
    icons: [
      {
        svg: siGithub.svg,
        style: { fill: `#${siGithub.hex}` },
        url: "https://github.com/mancillapedro",
      },
      {
        svg: siLinkedin.svg,
        style: { fill: `#${siLinkedin.hex}` },
        url: "https://www.linkedin.com/in/mancillapedro",
      },
      {
        svg: siHackerrank.svg,
        style: { fill: `#${siHackerrank.hex}` },
        url: "https://www.hackerrank.com/pedropmancillac",
      },
      {
        svg: siCodewars.svg,
        style: { fill: `#${siCodewars.hex}` },
        url: "https://www.codewars.com/users/mancillapedro",
      },
      {
        svg: siSololearn.svg,
        style: { fill: `#${siSololearn.hex}` },
        url: "https://www.sololearn.com/profile/9299702",
      },
      // {
      //   svg: siFreecodecamp.svg,
      //   style: { fill: `#${siFreecodecamp.hex}` },
      //   url: "https://www.freecodecamp.org/mancillapedro",
      // },
    ],
  }),
};
</script>