<template>
  <div class="row">
    <div class="col-6 offset-3">
      <h1>DC Heros <span class="badge bg-info">{{noOfHero}}</span></h1>
      <ul class="list-group">
        <li class="list-group-item" v-for="(hero, index) in dcHeroes" :key="index">
          <div class="d-flex justify-content-between">
            {{ hero }} <button class="float-right btn btn-danger badge badge-danger" @click="removeHero(index)">X</button>
          </div>
        </li>
      </ul>

      <form @submit.prevent="addNewHero(); newHero = ''">
        <div class="form-group">
          <label>Enter a name</label>
          <input class="form-control" v-model.trim="newHero" v-on:input="isActive = false" placeholder="Add a new task">
          <button class="btn btn-outline-info">Add Task</button>
        </div>
      </form>

    </div>
  </div>

</template>

<script>
import {ref, computed, watch} from "vue";
import Header from "./Header.vue";

export default {
  name: "DcHero",
  components:{ Header },
  setup() {

    //variables
    const dcHeroes = ref([
      'Reading a book',
      'Make a work schedule',
      'Go to market',
      'Complete CRUD',
    ]);
    const isActive = ref(true);
    const newHero = ref('');

    //methods
    const addNewHero = () =>{
      if (newHero.value){
        dcHeroes.value.push(newHero.value)
      }
    }

    //computed property
    const noOfHero = computed(() => {
      return dcHeroes.value.length;
    });

    const removeHero = (index) =>{
      dcHeroes.value = dcHeroes.value.filter((_,i) => i !== index);
      // dcHeroes.value.splice(index, 1);
    }

    return {dcHeroes, newHero, isActive, addNewHero, noOfHero, removeHero};
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

li {
  text-align: center;
}
</style>