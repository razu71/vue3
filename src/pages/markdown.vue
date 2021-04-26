<template>
  <div class="d-flex flex-wrap col-12">
    <h1 class="text-center my-4 col-12">Markdown App</h1>
    <section class="m-auto p-0 d-flex col-10 offset-1">
      <article class="col-6">
        <textarea class="form-control col-12" style="height: 200px" :value="text" @input="updateText"></textarea>
      </article>
      <article class="col-6" style="height: 200px; background-color: aliceblue" v-html="markedText"></article>
    </section>
  </div>
</template>
<script>
import {ref, computed, onBeforeMount, onMounted} from 'vue';
import marked from 'marked';
export default {
    setup() {
        const text = ref('');
        const time = ref('');

        const markedText = computed(() => {
          return marked(text.value)
        });

        const updateText = (e) => {
          clearTimeout(time.value)
          time.value = setTimeout(() => {
            text.value = e.target.value;
          }, 500)
        }

        return {text, markedText, updateText};
    },
}
</script>
<style scoped>
article{
  border: 1px solid #ddd;
}
textarea, textarea:focus{
  border: 1px solid #ddd;
}
</style>