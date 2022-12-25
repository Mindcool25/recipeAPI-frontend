<script setup>
  const props = defineProps({
    recipe: Object,
  });
</script>

<template>
  <h2>{{ props.recipe.title }}</h2>
  <p>
    Author:
    <router-link :to="`/author/${recipe.author}`">{{
      recipe.author
    }}</router-link>
  </p>
  <h3>Ingredients:</h3>
  <ul>
    <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
      {{ ingredient.i_name }} - {{ ingredient.amount }}
    </li>
  </ul>
  <h3>Instructions:</h3>
  <ol>
    <li v-for="(instruction, index) in recipe.instructions" :key="index">
      {{ instruction }}
    </li>
  </ol>
  <p v-if="recipe.notes != ''">Notes: {{ recipe.notes }}</p>
  <p v-else>Notes: none</p>
</template>
