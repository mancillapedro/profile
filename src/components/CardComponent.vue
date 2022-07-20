<template>
  <v-row id="CardComponent" justify="center" class="mb-16">
    <v-col class="text-center" cols="12">
      <v-card class="rounded-xl pt-0" elevation="20">
        <v-avatar class="mt-n16" color="primary" size="160">
          <img src="@/assets/img-perfil.gif" alt="Pedro Mancilla" />
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
        <redes-sociales-component/>
        <v-card-text>
          <v-row justify="center">
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
import RedesSocialesComponent from './RedesSocialesComponent.vue';

export default {
  components: { RedesSocialesComponent },
  name: "CardComponent",
};
</script>