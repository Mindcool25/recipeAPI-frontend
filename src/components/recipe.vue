<script setup>
  const props = defineProps({
    recipe: Object,
  });
</script>

<template>
  <h2>Title: {{ recipe.title }}</h2>
  <p>Author: {{ recipe.author }}</p>
  <h3>Ingredients:</h3>
  <ul>
    <li v-for="ingredient in recipe.ingredients">
      {{ ingredient.i_name }} - {{ ingredient.amount }}
    </li>
  </ul>
  <h3>Instructions:</h3>
  <ol>
    <li v-for="instruction in recipe.instructions">
      {{ instruction }}
    </li>
  </ol>
  <p>Notes: {{ recipe.notes }}</p>
</template>
