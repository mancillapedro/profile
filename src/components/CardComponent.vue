<template>
  <v-row id="CardComponent" justify="center" class="mb-16">
    <v-col class="text-center" cols="12">
      <v-card class="rounded-xl pt-0" elevation="20">
        <v-avatar class="mt-n16" color="primary" size="160">
          <img src="@/assets/img-perfil.gif" alt="Pedro Mancilla" />
        </v-avatar>
        <v-card-title
          class="pb-4 text-h4 justify-center"
          v-text="`Pedro Mancilla`"
          tag="h1"
        />
        <v-card-subtitle
          class="font-weight-light text-subtitle-1 pb-2"
          tag="h3"
          v-text="`Desarrollador web | Vue.js | RoR`"
        />
        <redes-sociales-component />
        <v-card-text>
          <v-row justify="center">
            <v-col cols="10" sm="9" md="6" xl="5" class="pb-8">
              <v-divider class="mb-4" />
              <p class="text-body-1 font-weight-light text-start">
                Hola, me llamo Pedro Mancilla, soy desarrollador web, conocí la
                programación buscando una forma de entretenerme, soy alguien que
                necesita de desafíos constantes, así que ha sido el mejor
                descubrimiento en mi vida jaja.
              </p>
              <p class="text-body-1 font-weight-light text-center">
                Me he desempeñado en diferentes áreas en la cuales realice
                funciones de reponedor, ayudante de cocina, construcción y
                reparación de obras menores.
              </p>
              <p class="text-body-1 font-weight-light text-end">
                Me capacite en tecnologías de la Informática, realizando cursos
                como: Emprendimiento digital con tecnologías web, Desarrollo de
                aplicaciones Front- End y AWS Cloud Foundations.
              </p>
              <p class="text-body-1 font-weight-light text-start">
                Actualmente el lenguaje que más uso es Javascript, y el
                framework Vue.js para FrontEnd, otros lenguajes con los que me
                familiarizo son Ruby y Python, y el framework para Ruby, Ruby On
                Rails
              </p>
              <p class="text-body-1 font-weight-light text-center">
                Algunas de mis características personales que puedo señalar son;
                la capacidad de adaptación, motivación por aprender, paciencia,
                metódico y con un alto sentido del trabajo.
              </p>
              <p class="text-body-1 font-weight-light text-end">
                A lo largo de la vida, he tenido varios tipos de trabajos no
                relacionados, pero hay algo que todos tienen en común, el
                trabajo en equipo y la resolución de problemas, fortalezas en
                las cuales sigo trabajando día a día para ser alguien mejor en
                la vida.
              </p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import RedesSocialesComponent from "./RedesSocialesComponent.vue";

export default {
  components: { RedesSocialesComponent },
  name: "CardComponent",
};
</script>