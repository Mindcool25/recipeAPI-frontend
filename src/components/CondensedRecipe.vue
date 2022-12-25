<script setup>
  const props = defineProps({
    recipe: Object,
  });
</script>

<template>
  <router-link :to="`/recipe/${props.recipe._id.$oid}`">
    <div style="border: 2px solid black">
      <h2>{{ recipe.title }}</h2>
      <p>Author: {{ recipe.author }}</p>
      <p v-if="recipe.notes != ''">Notes: {{ recipe.notes }}</p>
      <p v-else>Notes: none</p>
    </div>
  </router-link>
</template>
