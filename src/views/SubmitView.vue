<script setup>
  import { ref } from "vue";
  import LinkBar from "../components/LinkBar.vue";

  var id = 0;
  var title = "";
  var author = "";
  var ingredients = ref([{ i_name: "", amount: "" }]);
  var instructions = ref([{ id: id++, text: "" }]);
  var notes = "";

  function newIngredient() {
    // Pushing a new empty ingredient to the ingredients list
    ingredients.value.push({ name: "", amount: "" });
    console.log(ingredients);
  }
  function removeIng(ing) {
    // Removes given ingredient by ID
    ingredients.value = ingredients.value.filter((i) => i !== ing);
  }
  function upIng(ing) {
    let index = ingredients.value.indexOf(ing);
    if (index != 0) {
      ingredients.value[index] = ingredients.value[index - 1];
      ingredients.value[index - 1] = ing;
    }
  }
  function downIng(ing) {
    let index = ingredients.value.indexOf(ing);
    if (index != ingredients.value.length - 1) {
      ingredients.value[index] = ingredients.value[index + 1];
      ingredients.value[index + 1] = ing;
    }
  }

  function newInstruction() {
    // Pushes new empty instruction to instruction list
    instructions.value.push({ id: id++, text: "" });
    console.log(instructions);
  }
  function removeInst(inst) {
    // Removes given instruction by ID
    instructions.value = instructions.value.filter((i) => i !== inst);
  }
  function upInst(inst) {
    let index = instructions.value.indexOf(inst);
    if (index != 0) {
      instructions.value[index] = instructions.value[index - 1];
      instructions.value[index - 1] = inst;
    }
  }
  function downInst(inst) {
    let index = instructions.value.indexOf(inst);
    if (index != instructions.value.length - 1) {
      instructions.value[index] = instructions.value[index + 1];
      instructions.value[index + 1] = inst;
    }
  }

  function submit() {
    // Putting all instructions into a list to send to server
    var instruction_list = [];
    for (const i in instructions.value) {
      instruction_list.push(instructions.value[i].text);
    }
    // Setting up the data to be in a structure the server can read
    const data = {
      title: title,
      author: author,
      ingredients: ingredients.value,
      instructions: instruction_list,
      notes: notes,
    };

    // POST request to the server with given data
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };
    fetch("http://127.0.0.1:8000/submit", options);
  }
</script>
<!--
  Form for submitting a Recipe
  Organized like the following:
  Title
  Author
  Ingredient list
  Instruction list
  Notes
  -->
<template>
  <form @submit.prevent="submit">
    <div class="form-control">
      <label>Title: </label>
      <input
        v-model="title"
        type="text"
        name="title"
        placeholder="Recipe Title"
      />
    </div>
    <div class="form-control">
      <label>Author: </label>
      <input
        v-model="author"
        type="text"
        name="author"
        placeholder="Author name"
      />
    </div>

    <div>
      <p>Ingredients:</p>
      <ul>
        <li v-for="(ing, index) in ingredients" :key="index">
          <input
            v-model="ing.i_name"
            type="text"
            name="ingredient"
            placeholder="Ingredient"
          />
          -
          <input
            v-model="ing.amount"
            type="text"
            name="amount"
            placeholder="Amount"
          />
          <button @click="upIng(ing)">↑</button>
          <button @click="downIng(ing)">↓</button>
          <button @click="removeIng(ing)">X</button>
        </li>
      </ul>
    </div>
    <form @submit.prevent="newIngredient">
      <button>Add Ingredient</button>
    </form>

    <div>
      <p>Instructions:</p>
      <ol>
        <li v-for="(ins, index) in instructions" :key="index">
          <input
            v-model="ins.text"
            type="text"
            name="instruction"
            placeholder="Instructions"
            style="width: 60%"
          />
          <button @click="upInst(ins)">↑</button>
          <button @click="downInst(ins)">↓</button>
          <button @click="removeInst(ins)">X</button>
        </li>
      </ol>
    </div>
    <form @submit.prevent="newInstruction">
      <button>Add Instruction</button>
    </form>
    <p>Notes:</p>
    <textarea v-model="notes"></textarea>
    <br />
    <button>Submit</button>
  </form>
  <LinkBar />
</template>
