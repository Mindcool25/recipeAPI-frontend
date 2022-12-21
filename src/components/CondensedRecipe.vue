<script setup>
  const props = defineProps({
    recipe: Object,
  });

</script>

<template>
  <router-link :to="`/recipe/${recipe._id.$oid}`">
  <div style="border:2px solid black;">
    <h2>Title: {{ recipe.title }}</h2>
    <p>Author: {{ recipe.author }}</p>
    <p>Notes: {{ recipe.notes }}</p>
  </div>
  </router-link>
</template>
