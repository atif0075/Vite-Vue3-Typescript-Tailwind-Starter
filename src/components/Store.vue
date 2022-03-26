<template>
  <XyzTransitionGroup
    class="flex flex-col justify-center items-center w-full md:max-w-screen-sm"
    xyz="fade small"
  >
    <div v-if="show" xyz="fade big">
      <img class="w-20" src="../assets/pinia.svg" alt="Pinia" />
    </div>
    <h1
      v-if="show"
      xyz="fade left"
      class="text-white text-center text-2xl font-bold md:text-3xl"
    >
      Pinia
    </h1>
    <p v-if="show" class="text-yellow text-center text-xs sm:text-base">
      The Vue Store that you will enjoy using
    </p>
    <p
      v-if="show"
      class="px-4 text-white text-sm sm:text-base md:text-lg text-justify py-1"
    >
      Pinia works for both Vue 2 and Vue 3 and doesn't require you to use the
      composition API. The API is the same for both except for installation and
      SSR, and these docs are targeted to Vue 3 with notes about Vue 2 whenever
      necessary so it can be read by Vue 2 and Vue 3 users!
    </p>
    <h1
      v-if="show"
      class="self-start text-white px-4 text-base font-bold md:text-xl capitalize pt-2"
    >
      Try out this counter example
    </h1>
    <main v-if="show" class="px-4 w-full py-2">
      <XyzTransition
        appear
        mode="out-in"
        xyz="flip-up out-flip-down duration-2 ease-out"
      >
        <div
          class="bg-[#0f1524] w-full h-48 text-yellow border border-[#ffffff3b] border-dashed rounded-lg flex justify-center items-center font-bold text-2xl"
          :key="store.count"
        >
          {{ store.count }}
        </div>
      </XyzTransition>
    </main>
    <div v-if="show" class="my-5">
      <button @click="store.increment" class="btn mx-4">Increase</button>
      <button
        @click="store.count ? store.count-- : ''"
        class="btn-outline mx-4"
      >
        Decrease
      </button>
    </div>
    <main v-if="show" class="px-4 w-full">
      <h1
        class="text-white self-start md:self-center text-base font-bold md:text-xl capitalize py-2"
      >
        Try to change the name
      </h1>
      <input
        v-model="Name"
        type="text"
        class="w-full bg-light-gray outline-none border border-[#ffffff59] border-dashed text-white p-2 rounded-md h-10"
      />
    </main>
    <div v-if="show" class="my-5">
      <button @click="saveName" class="btn mx-4">Save</button>
      <button @click="reset" class="btn-outline mx-4">Reset</button>
    </div>
  </XyzTransitionGroup>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue-demi";
import { useStore } from "../store/store";
let Name = ref("");
let show = ref(false);
onMounted(() => {
  show.value = true;
});
const store = useStore();
let saveName = () => {
  store.show = false;
  store.name = Name.value;
  setTimeout(() => {
    store.show = true;
  }, 1);
  Name.value = "";
};
let reset = () => {
  store.show = false;
  store.name = "Atif";
  setTimeout(() => {
    store.show = true;
  }, 1);
};
</script>
