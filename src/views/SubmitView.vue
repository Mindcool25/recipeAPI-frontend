<script setup>
import {ref} from 'vue'

var id = 0;
var title = "";
var author = "";
var newI = ref('')
var ingredients = ref([{Iname:"", amount:""}])
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
</script>

<template>
<form>
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
        <input type="text" v-model="ing.Iname" name="ingredient" placeholder="Ingredient"/> - <input type="text" v-model="ing.amount" name="amount" placeholder="Amount"/><button @click="removeIng(ing)">X</button>
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
</form>
</template>
