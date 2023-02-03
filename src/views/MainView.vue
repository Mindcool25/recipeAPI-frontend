<script setup>
  import { ref } from "vue";
  import recipe from "../components/FullRecipe.vue";
  import LinkBar from "../components/LinkBar.vue";

  const loading = ref(true);
  const r = ref(null);

  async function get_response() {
    const url = "http://127.0.0.1:8000/all";
    const res = await fetch(url);
    r.value = await res.json();
    r.value = r.value.r_list[Math.floor(Math.random() * r.value.r_list.length)];
    loading.value = false;
  }
  get_response();
</script>

<template>
  <h1>Welcome to Mindcoo24's Recipe Database!</h1>
  <h2>Random Recipe:</h2>
  <LinkBar />
  <recipe v-if="!loading" :recipe="r" />
  <p v-else>Loading...</p>
</template>
