<script setup>
  import RecipeView from "./views/RecipeView.vue";
  import SubmitView from "./views/SubmitView.vue";

  async function send_response() {
    const data = {
      TEST: "Test",
    };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };
    fetch("http://127.0.0.1:8000/submit", options);
  }
</script>

<template>
  <RecipeView />
  <SubmitView />
</template>
