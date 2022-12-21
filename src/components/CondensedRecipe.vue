
<script setup>
  const props = defineProps({
    recipe: Object,
  });
</script>

<template>
  <div style="border:2px solid black;">
    <h2>Title: {{ recipe.title }}</h2>
    <p>Author: {{ recipe.author }}</p>
    <p>Notes: {{ recipe.notes }}</p>
  </div>
</template>
