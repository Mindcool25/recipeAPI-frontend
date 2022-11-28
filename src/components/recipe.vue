<script setup>
  const props = defineProps({
    recipe: Object,
  });
</script>

<template>
  <h1>ID: {{ recipe.id }}</h1>
  <h2>Title: {{ recipe.title }}</h2>
  <p>Author: {{ recipe.author }}</p>
  <h3>Ingredients:</h3>
  <ul>
    <li v-for="item of JSON.parse(recipe.ingredients)['ingredients']">
      {{ item["amount"] }} - {{ item["name"] }}
    </li>
  </ul>
  <h3>Instructions:</h3>
  <ol>
    <li v-for="item of JSON.parse(recipe.instructions)['instructions']">
      {{ item }}
    </li>
  </ol>
  <p>Notes: {{ recipe.notes }}</p>
</template>
