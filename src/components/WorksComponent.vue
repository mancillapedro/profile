<template>
  <v-row id="WorksComponent" justify="center" class="mb-16">
    <v-col
      v-for="({ title, imgs, path, deploy, repo }, index) in works"
      :key="index"
      cols="11"
      sm="8"
      md="5"
    >
      <v-card class="px-8 rounded-lg" elevation="6">
        <v-card-title class="px-0 text-h5 text-sm-h4" v-text="title" />
        <v-carousel
          hide-delimiters
          height="232px"
          cycle
          interval="4000"
          dark
          :show-arrows-on-hover="true"
        >
          <v-carousel-item
            v-for="(img, i) in imgs"
            :key="i"
            class="blue-grey lighten-5 rounded"
          >
            <v-img
              class="my-4"
              :src="require(`@/assets/${path}/${img}`)"
              height="200px"
              contain
              position="center center"
            />
          </v-carousel-item>
        </v-carousel>
        <v-sheet class="d-flex justify-space-between flex-column flex-sm-row py-4">
          <v-btn v-text="`Ver Repositorio`" :href="repo" color="secondary" text/>
          <v-btn v-text="`Ver deploy`" :href="deploy" color="primary" text/>
        </v-sheet>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "WorksComponent",
  // props: {},
  data: () => ({
    works: [
      {
        title: "Game Opinions",
        path: "game-opinions-screenshots",
        imgs: ["desktop.png", "mobile.png"],
        description: "1,000 miles of wonder",
        deploy:'https://mancillapedro.github.io/games-opinion-site/',
        repo:'https://github.com/mancillapedro/games-opinion-site',
      },
    ],
  }),
  // computed: {},
  // methods: {},
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>