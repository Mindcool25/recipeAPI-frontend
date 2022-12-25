<script setup>
  import { ref } from "vue";
  import condensed_recipe from "../components/CondensedRecipe.vue";
  import { useRoute } from "vue-router";

  const loading = ref(true);
  const r = ref(null);
  const route = useRoute();

  async function get_response() {
    const author = route.params.author;
    const url = `http://127.0.0.1:8000/author/${author}`;
    const res = await fetch(url);
    r.value = await res.json();
    loading.value = false;
    //console.log(r.r_list)
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
