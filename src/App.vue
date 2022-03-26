<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <section class="bg-gray">
      <Navbar />
    <main class="min-h-screen container mx-auto">
      <div class="py-24">
        <router-view />
      </div>
    </main>
  </section>
  <div class="square" v-if="true" xyz="inherit up"></div>
  <div class="square" v-if="true" xyz="inherit down"></div>
</template>
<style lang="postcss">
body::-webkit-scrollbar {
  @apply w-[1px];
}
body::-webkit-scrollbar-track {
  @apply bg-gray;
}
body::-webkit-scrollbar-thumb {
  @apply bg-yellow;
}
</style>
