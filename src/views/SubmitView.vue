<script setup>
import {ref} from 'vue'

var id = 0;
var title = "";
var author = "";
var ingredients = ref([{i_name:"", amount:""}])
var instructions = ref([{id:id++, text:""}])

function newIngredient() {
  // Pushing a new empty ingredient to the ingredients list
  ingredients.value.push({name:"", amount:""})
  console.log(ingredients)
}
function removeIng(ing) {
  // Removes gven ingredient by ID
  ingredients.value = ingredients.value.filter((i)=>i!==ing)
}

function newInstruction() {
  // Pushes new empty instruction to instruction list
  instructions.value.push({id:id++, text:""})
  console.log(instructions)
}
function removeInst(inst) {
  // Removes given instruction by ID
  instructions.value = instructions.value.filter((i)=>i!==inst)
}

function submit() {
  // Putting all instructions into a list to send to server
  var instruction_list = []
  for (const i in instructions.value) {
    instruction_list.push(instructions.value[i].text);
  }
  // Setting up the data to be in a structure the server can read
  const data = {
    "title": title,
    "author": author,
    "ingredients": ingredients.value,
    "instructions": instruction_list,
    "notes": "Empty for now",
  };

  // POST request to the server with given data
  const options = {
    method: 'POST',
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
  TODO: Notes
  -->
<template>
<form @submit.prevent="submit">
  <div class="form-control">
    <label>Title: </label>
    <input type="text" v-model="title" name="title" placeholder="Recipe Title" />
  </div>
  <div class="form-control">
    <label>Author: </label>
    <input type="text" v-model="author" name="author" placeholder="Author name"/>
  </div>

  <div>
    <ul>
      <li v-for="ing in ingredients">
        <input type="text" v-model="ing.i_name" name="ingredient" placeholder="Ingredient"/> - <input type="text" v-model="ing.amount" name="amount" placeholder="Amount"/><button @click="removeIng(ing)">X</button>
      </li>
    </ul>
  </div>
  <form @submit.prevent="newIngredient">
    <button>Add Ingredient</button>
  </form>

  <div>
    <ol>
      <li v-for="ins in instructions">
        <input type="text" v-model="ins.text" name="instruction" placeholder="Instructions" style="width:60%;"><button @click="removeInst(ins)">X</button>
      </li>
    </ol>
  </div>
  <form @submit.prevent="newInstruction">
    <button>Add Instruction</button>
  </form>
  <button>Submit</button>
</form>
</template>
