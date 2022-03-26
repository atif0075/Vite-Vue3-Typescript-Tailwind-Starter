<template>
  <main class="w-full bg-gray fixed md:px-12 z-50">
    <nav class="flex items-center justify-between p-4">
      <router-link
        to="/"
        class="inline-flex items-center justify-center px-4 py-3 text-white bg-light-gray rounded-lg"
      >
        <code class="text-white">
          👋
          <div
            v-if="store.show"
            xyz="fade up small"
            class="inline-block xyz-in"
          >
            {{ store.name }}
          </div>
        </code>
      </router-link>
      <ul class="flex items-center text-sm text-white font-medium">
        <li class="lg:block">
          <router-link class="px-3 py-2 rounded-lg cursor-pointer" to="/">
            Home
          </router-link>
        </li>

        <li>
          <router-link to="/store" class="px-3 py-2 rounded-lg">
            Store
          </router-link>
        </li>
        <li>
          <a
            class="inline-flex items-center px-3 py-2 rounded-lg"
            href="https://github.com/atif0075"
            target="_blank"
          >
            Github
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="ml-1.5 w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue-demi";
import { useStore } from "../store/store";

const store = useStore();

onMounted(() => {
  store.show = true;
});
</script>
