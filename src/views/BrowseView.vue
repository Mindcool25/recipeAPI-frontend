<script setup>
  import { ref } from "vue";
  import condensed_recipe from "../components/CondensedRecipe.vue";

  const loading = ref(true);
  const r = ref(null);

  async function get_response() {
    const url = "http://127.0.0.1:8000/all";
    const res = await fetch(url);
    r.value = await res.json();
    loading.value = false;
  }
  get_response();
</script>

<template>
  <div v-if="!loading">
    <div v-for="(recipe, index) in r.r_list" :key="index">
      <condensed_recipe v-if="!loading" :recipe="recipe" />
    </div>
  </div>
  <p v-else>Loading...</p>
</template>
