<script setup>
  import { ref } from "vue";
  import condensed_recipe from "../components/CondensedRecipe.vue"
  import { useRoute } from "vue-router";

  const loading = ref(true);
  const r = ref(null)
  const input = ref("")

  async function search(input) {
    const title = input;
    const url = `http://127.0.0.1:8000/title/${title}`;
    const res = await fetch(url);
    r.value = await res.json();
    loading.value = false;
  }
</script>

<template>
  <div>
    <input type="text" v-model="input" placeholder="Search Recipes"/>
    <button @click = "search(input)">Search</button>
  </div>
  <div v-if="!loading">
    <div v-for="(recipe, index) in r.r_list" :key="index">
      <condensed_recipe :recipe="recipe"/>
    </div>
  </div>
</template>
