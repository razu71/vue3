<template>
  <div class="row">
    <div class="col-6 offset-3">
      <h2>Todo Tasks <span class="badge bg-info">{{ noOfTask }}</span></h2>
      <h1>{{ testData.value._value }}</h1>
      <ul class="list-group">
        <li class="list-group-item" v-for="(hero, index) in tasks" :key="index">
          <div class="d-flex justify-content-between">
            {{ hero }}
            <button class="float-right btn btn-danger badge badge-danger" @click="removeHero(index)">X</button>
          </div>
        </li>
      </ul>
      <br>

      <form @submit.prevent="addNewHero(); newHero = ''">
        <div class="form-group">
          <label>Enter a task name</label>
          <div class="d-flex">
            <input class="form-control" ref="taskInputField" v-model.trim="newHero" v-on:input="isActive = false"
                   placeholder="Add a new task">
            <button class="btn btn-outline-info col-2">Add Task</button>
          </div>
        </div>
      </form>

    </div>
  </div>

</template>

<script>
import {ref, computed, onMounted} from "vue";
import mixin from "../utilities/mixin.js";

export default {
  name: "DcHero",
  mixins:[mixin],
  setup() {

    const taskInputField = ref(null)
    const testData = mixin.setup()

    //variables
    const tasks = ref([
      'Reading a book',
      'Make a work schedule',
      'Go to market',
      'Complete CRUD',
    ]);
    const isActive = ref(true);
    const newHero = ref('');

    //methods
    const addNewHero = () => {
      if (newHero.value) {
        tasks.value.push(newHero.value)
      }
    }

    //computed property
    const noOfTask = computed(() => {
      return tasks.value.length;
    });

    const removeHero = (index) => {
      tasks.value = tasks.value.filter((_, i) => i !== index);
      // tasks.value.splice(index, 1);
    }

    onMounted(() => {
      taskInputField.value.focus()
    })

    return {
      tasks,
      newHero,
      isActive,
      addNewHero,
      noOfTask,
      removeHero,
      testData,
      taskInputField
    };
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