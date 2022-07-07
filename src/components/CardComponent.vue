<template>
  <v-row id="CardComponent" justify="center">
    <v-col class="text-center" cols="12">
      <v-card class="rounded-xl pt-0" elevation="24">
        <v-avatar class="mt-n16" color="primary" size="160">
          <img
            src="https://mancillapedro.github.io/profile/img-perfil.gif"
            alt="Pedro Mancilla"
          />
        </v-avatar>
        <v-card-title
          class="pb-4"
          v-html="
            `<h1 class='mx-auto text-h5 text-md-h4 mt-4'>Pedro Mancilla</h1>`
          "
        />
        <v-card-subtitle
          v-html="`<h3 class='font-weight-light'>Desarrollador web</h4>`"
        />
        <v-card-text>
          <v-row justify="center">
            <v-col cols="11">
              <v-btn v-for="icon in icons" :key="icon" class="mx-md-4" icon>
                <v-icon size="24px" v-text="icon" />
              </v-btn>
              <v-divider class="my-8" />
            </v-col>
            <v-col cols="11" md="7" class="pb-8">
              <p class="text-body-1 font-weight-light">
                Me he desempeñado en diferentes áreas en la cuales realice
                funciones reponedor, ayudante cocina- construcción y reparación
                de obras menores.
                <br />
                Me capacite en tecnologías de la Informática, realizando curso
                emprendimiento digital, con tecnología web con ruby on rails,
                desarrollo web frontend y Amazon Web Services.
                <br />
                Algunas de mis características personales que puedo señalar son;
                la capacidad de adaptación, motivación por aprender, paciencia,
                metódico y con un alto sentido del trabajo.
              </p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CardComponent",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>