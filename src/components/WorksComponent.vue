<template>
  <v-row id="WorksComponent" justify="center" class="mb-16">
    <v-col
      v-for="({ title, imgs, path, description }, index) in works"
      :key="index"
      cols="11"
      md="5"
    >
      <v-card class="px-8 rounded-lg" elevation="6">
        <v-card-title class="px-0" v-text="title" />
        <v-carousel
          hide-delimiters
          height="200px"
          cycle
          interval="4000"
          dark
          :show-arrows-on-hover="true"
        >
          <v-carousel-item
            v-for="(img, i) in imgs"
            :key="i"
            class="primary rounded"
          >
            <v-img
              class=""
              :src="require(`@/assets/${path}/${img}`)"
              height="100%"
              contain
            />
          </v-carousel-item>
        </v-carousel>
        <v-row justify="end" class="pt-4">
          <v-card-subtitle v-text="description" />
        </v-row>
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