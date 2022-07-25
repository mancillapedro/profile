<template>
  <v-card id="WorksComponent" rounded="xl" elevation="0" class="py-4 mb-16">
    <v-card-title
      class="justify-center text-h4"
      v-text="`Proyectos`"
      tag="h2"
    />
    <v-row class="fill-height" justify="center" align="center">
      <v-col cols="12" sm="11" md="10">
        <v-carousel cycle hide-delimiters interval="8000">
          <v-carousel-item
            v-for="({ title, imgs, path, deploy, repo }, index) in works"
            :key="index"
          >
            <v-row class="fill-height" justify="center" align="center">
              <v-col cols="12" sm="9" md="7">
                <v-card class="px-4 px-sm-8 rounded-lg" elevation="6">
                  <v-card-title class="px-0 text-h5" v-text="title" />
                  <v-carousel
                    cycle
                    hide-delimiters
                    height="266px"
                    interval="3000"
                    :show-arrows="false"
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
                        height="250px"
                        contain
                        position="center center"
                      />
                    </v-carousel-item>
                  </v-carousel>
                  <v-sheet
                    class="
                      d-flex
                      justify-space-between
                      flex-column flex-sm-row
                      py-4
                    "
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
          </v-carousel-item>
        </v-carousel>
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
      {
        title: "Game Opinions (repetido)",
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