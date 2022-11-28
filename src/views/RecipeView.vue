<script setup>
import {ref} from 'vue'
import recipe from "../components/recipe.vue"

const test = ref('testing');

async function get_response() {
	const res = await fetch("http://127.0.0.1:8000/db/1");
	test.value = await res.json();
	console.log(test.value);
	return test
}
get_response();
</script>

<template>
	<recipe v-if="test != 'testing'" :recipe="test"/>
	<p v-else>Loading...</p>
</template>
