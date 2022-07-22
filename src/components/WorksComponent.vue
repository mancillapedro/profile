<template>
  <v-card id="WorksComponent" rounded="xl" elevation="24" class="py-4 mb-16">
    <v-card-title
      class="justify-center text-h4"
      v-text="`Proyectos`"
      tag="h2"
    />
    <v-row justify="center" class="py-8">
      <v-col
        v-for="({ title, imgs, path, deploy, repo }, index) in works"
        :key="index"
        cols="11"
        sm="8"
        md="5"
      >
        <v-card class="px-4 px-sm-8 rounded-lg" elevation="6">
          <v-card-title class="px-0 text-h5" v-text="title" />
          <v-carousel
            cycle
            hide-delimiters
            height="216px"
            interval="4000"
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(img, i) in imgs"
              :key="i"
              class="blue-grey lighten-5 rounded"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <v-img
                class="ma-2"
                :src="require(`@/assets/${path}/${img}`)"
                height="200px"
                contain
                position="center center"
              />
            </v-carousel-item>
          </v-carousel>
          <v-sheet
            class="d-flex justify-space-between flex-column flex-sm-row py-4"
          >
            <v-btn
              v-text="`Ver Repositorio`"
              :href="repo"
              color="secondary"
              target="_blank"

              link
              text
            />
            <v-btn
              v-text="`Ver deploy`"
              :href="deploy"
              color="primary"
              target="_blank"
              link
              text
              class="align-self-end"
            />
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "WorksComponent",
  data: () => ({
    works: [
      {
        title: "Game Opinions",
        path: "game-opinions-screenshots",
        imgs: ["desktop.png", "mobile.png"],
        description: "1,000 miles of wonder",
        deploy: "https://mancillapedro.github.io/games-opinion-site/",
        repo: "https://github.com/mancillapedro/games-opinion-site",
      },
    ],
  }),
};
</script>