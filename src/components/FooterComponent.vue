<template>
  <v-footer id="FooterComponent" padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-title>
        <v-row justify="center">
          <v-col cols="11" md="5">
            <strong
              class="subheading"
              v-text="`Get connected with us on social networks!`"
            />
          </v-col>
          <v-col cols="11" md="5"> </v-col>
        </v-row>
      </v-card-title>
      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </v-card-text>
      <v-divider />
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  };
</script>