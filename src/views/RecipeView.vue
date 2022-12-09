<script setup>
  import { ref } from "vue";
  import recipe from "../components/recipe.vue";

  const loading = ref(true);
  const r = ref(null);

  async function get_response() {
    const res = await fetch("http://127.0.0.1:8000/author/Mindcool24");
    r.value = await res.json();
    console.log(r.value);
    loading.value = false;
    console.log(loading);
    return r;
  }
  get_response();
</script>

<template>
  <recipe v-if="!loading" :recipe="r" />
  <p v-else>Loading...</p>
</template>
