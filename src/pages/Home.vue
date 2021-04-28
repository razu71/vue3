<template>
  <h1>{{ count }}</h1>
  <button @click="increment" class="btn btn-success"> Increment</button>
  <button @click="decrement" class="btn btn-danger"> Decrement</button>

  <HomeChild @changeValue="changeValue"/>
  <h1>{{ childValue}}</h1>

  <div id="demo">
    <button @click="show = !show">
      Toggle
    </button>

    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
import {ref, onMounted, computed} from 'vue';
import {useStore, mapActions} from "vuex";
import HomeChild from "./HomeChild.vue";

export default {
  name: "Home",
  components:{HomeChild},
  setup() {
    const store = useStore();
    const childValue = ref('test child')
    const show = ref(true)
    const count = computed(() => {
      if (store.state.count <= 0) {
        return store.state.count = 0;
      }
      return store.state.count;
    })
    const increment = () => {
      store.dispatch('increment', 3)
    }

    const decrement = () => {
      store.dispatch('decrement', 3)
    }

    const changeValue = (event) => {
      childValue.value = event
    }

    return {
      count,
      show,
      increment,
      decrement,
      changeValue,
      childValue
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>