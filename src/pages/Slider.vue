<template>
  <div class="d-flex flex-wrap col-12 position-relative">
    <div class="position-absolute col-12" v-for="(slide, index) in sliders" :key="slide">
      <transition name="fade">
        <div v-if="currentSlider === index" style="height: 200px" :class="slide">
        </div>
      </transition>
    </div>

    <div class="col-12" style="height:190px">
      <div class="position-absolute col-12 d-flex justify-content-center">
        <div
            v-for="(slider, index) in sliders"
            :key="slider"
            :class="currentSlider === index ? 'bullet active' : 'bullet'"
        ><button @click="setCurrentSlider(index)"></button></div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, onBeforeUnmount} from 'vue'

export default {
  name: "Slider",
  setup() {
    const currentSlider = ref(0);
    const interval = ref(1);
    const sliders = ref(['bg-danger', 'bg-primary', 'bg-success']);

    onMounted(() => {
      interval.value = setInterval(() => {
        if (currentSlider.value === (sliders.value.length - 1)) {
          currentSlider.value = 0;
        } else {
          currentSlider.value++;
        }
      }, 3000)
    })

    onBeforeUnmount(() => {
      clearInterval(interval.value)
    })

    const setCurrentSlider = (index) => {
      currentSlider.value = index;
    }

    return {currentSlider, sliders, setCurrentSlider};
  }
}
</script>

<style scoped>
.bullet {
  margin: 2px;
  border-radius: 20px;
  background-color: #f1c40a;
}

.bullet.active {
  margin: 2px;
  border-radius: 20px;
  background-color: #0729d2;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
button{
  padding: 10px;
  margin: 2px;
  border-radius: 20px;
  background-color: transparent;
  border: transparent;
 }
</style>