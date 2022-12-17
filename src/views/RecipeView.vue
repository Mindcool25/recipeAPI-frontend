<script setup>
  import { ref } from "vue";
  import recipe from "../components/recipe.vue";
  import { useRoute } from "vue-router";

  const loading = ref(true);
  const r = ref(null);
  const route = useRoute();
  
  async function get_response() {
    const id = route.params.id;
    const url = `http://127.0.0.1:8000/id/${id}`
    const res = await fetch(url);
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
