<template>
  <!-- por buena práctica en Vue nos recomienda que solo retornemos un solo elemento, es similar a react con el uso del fragment -->
  <div>
    <h1 class="text-center font-bold text-3xl">
      Rick and Morty Api - MicroFrontend
    </h1>

    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <div
          class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <!-- este div se va a repetir varias veces, por eso vamos a usar la instrucción v-for="", y este nos va a ayudar a ejecutar un ciclo for (similar a como si fuera un map()) pero usando directivas de Vue (esto solo funciona en Vue). El :key="" es para decirle que será dinámico y será único. Los :nombre_atributo nos sirve para decirle que será dinámico -->
          <div v-for="character in characters" :key="character.id">
            <a :href="`/personajes/${character.id}`">
              <div
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
              >
                <img
                  width="150"
                  height="150"
                  :src="character.image"
                  :alt="character.name"
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">
                Especie: {{ character.species }}
              </h3>
              <p class="mt-1 text-lg font-medium text-gray-900">
                {{ character.name }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

// tener un lugar donde almacenar los datos pero que esta sea una referencia reactiva donde este ref tendrá como estado inicial un array vacio
const characters = ref([]);

const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  const data = await response.json();
  // console.log(data.results);

  // setear la data
  characters.value = data.results;
};

// para poder ejecutar la función para la petición de los personajes, se usará onMounted() que es parte del ciclo de vida de Vue, donde este onMounted() es como un useEffect(), es decir que cuando se monte el componente se podrá ejecutar lo que tiene dentro de la función
onMounted(() => {
  getCharacters();
});
</script>
