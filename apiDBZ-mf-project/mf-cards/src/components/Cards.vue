<template>
  <!-- por buena práctica en Vue nos recomienda que solo retornemos un solo elemento, es similar a react con el uso del fragment -->
  <div>
    <h1 class="text-center font-bold text-3xl">
      Rick and Morty Api - MicroFrontend
    </h1>
    <!-- este div se va a repetir varias veces, por eso vamos a usar la instrucción v-for="", y este nos va a ayudar a ejecutar un ciclo for (similar a como si fuera un map()) pero usando directivas de Vue (esto solo funciona en Vue). El :key="" es para decirle que será dinámico y será único -->
    <div v-for="character in characters" :key="character.id">
      <!-- los :nombre_atributo nos sirve para decirle que será dinámico -->
      <img
        width="150"
        height="150"
        :src="character.image"
        :alt="character.name"
      />
      {{ character.name }} | {{ character.species }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

// tener un lugar donde almacenar los datos pero que esta sea una referencia reactiva donde este ref tendrá como estado inicial un array vacio
const characters = ref([]);

const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character", {
    headers: {
      accept: "application/json",
    },
  });

  const data = await response.json();

  console.log(data.results);

  // setear la data
  characters.value = data.results;
};

// para poder ejecutar la función para la petición de los personajes, se usará onMounted() que es parte del ciclo de vida de Vue, donde este onMounted() es como un useEffect(), es decir que cuando se monte el componente se podrá ejecutar lo que tiene dentro de la función
onMounted(() => {
  getCharacters();
});
</script>
