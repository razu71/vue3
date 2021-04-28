<template>
  <button @click="sendValue"> Click Here</button>
</template>

<script>
export default {
  name: "HomeChild",
  props: ['homeValue'],
  setup(props,{emit}){

    const sendValue = () => {
      emit('change-value', 'Hello from child');
    }

    return {sendValue}
  }
}
</script>

<style scoped>

</style>