<template>
  <XyzTransitionGroup
    class="head flex justify-center items-center item-group"
    xyz="fade small"
  >
    <div xyz="inherit left" v-if="show">Vite +&nbsp;</div>
    <div xyz="fade big" v-if="show">Vue 3 +&nbsp;</div>
    <div v-if="show">TypeScript +&nbsp;</div>
    <div v-if="show">Tailwind +&nbsp;</div>
    <div xyz="inherit right" v-if="show">Pinia</div>
  </XyzTransitionGroup>

  <p class="text-yellow text-center text-xs sm:text-base">
    The Progressive JavaScript Framework
  </p>

  <XyzTransitionGroup xyz="fade small stagger">
    <main
      v-if="show"
      class="grid grid-cols-3 gap-2 text-white p-4 lg:w-[32rem]"
    >
      <div
        class="xyz-in border-2 py-1 border-light-gray rounded-md flex flex-col justify-center items-center"
      >
        <img src="../assets/vite.svg" class="w-16" alt="Vite" />
        <p class="text-xs py-1">Vite</p>
      </div>
      <div
        class="xyz-in border-2 py-1 border-light-gray rounded-md flex flex-col justify-center items-center"
      >
        <img src="../assets/vue.svg" class="w-16" alt="Vite" />
        <p class="text-xs py-1">Vue</p>
      </div>
      <div
        class="xyz-in border-2 py-1 border-light-gray rounded-md flex flex-col justify-center items-center"
      >
        <img src="../assets/pinia.svg" class="w-11" alt="Pinia" />
        <p class="text-xs py-1">Pinia</p>
      </div>
      <div
        class="xyz-in border-2 py-1 col-span-2 border-light-gray rounded-md flex flex-col justify-center items-center"
      >
        <img src="../assets/anime.svg" class="w-16" alt="Anime" />
        <p class="text-xs py-1">AnimXYZ</p>
      </div>
      <div
        class="xyz-in border-2 py-1 border-light-gray rounded-md flex flex-col justify-center items-center"
      >
        <img src="../assets/Typescript.svg" class="w-16" alt="Typescript" />
        <p class="text-xs py-1">Typescript</p>
      </div>
      <div
        class="xyz-in border-2 py-1 col-span-3 border-light-gray rounded-md flex flex-col justify-center items-center"
      >
        <img src="../assets/Tailwind.svg" class="w-16" alt="Tailwind" />
        <p class="text-xs py-1">Tailwindcss</p>
      </div>
    </main>
  </XyzTransitionGroup>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
let show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>

<style></style>
