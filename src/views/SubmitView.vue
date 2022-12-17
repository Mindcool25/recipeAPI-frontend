<script setup>
import {ref} from 'vue'

var id = 0;
var title = "";
var author = "";
var newI = ref('')
var ingredients = ref([{i_name:"", amount:""}])
var instructions = ref([{id:id++, text:""}])

function newIngredient() {
  ingredients.value.push({name:"", amount:""})
  console.log(ingredients)
}
function removeIng(ing) {
  ingredients.value = ingredients.value.filter((i)=>i!==ing)
}

function newInstruction() {
  instructions.value.push({id:id++, text:""})
  console.log(instructions)
}
function removeInst(inst) {
  instructions.value = instructions.value.filter((i)=>i!==inst)
}

function submit() {
  var instruction_list = []
  for (const i in instructions.value) {
    console.log("i: ", instructions.value[i].text);
    instruction_list.push(instructions.value[i].text);
  }
  console.log(instructions)
  console.log(instruction_list)
  const data = {
    "title": title,
    "author": author,
    "ingredients": ingredients.value,
    "instructions": instruction_list,
    "notes": "Empty for now",
  };
  console.log("Data setup as ", data)
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
  };
  fetch("http://127.0.0.1:8000/submit", options);
  console.log("sent r");
}
</script>

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
