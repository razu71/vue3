<template>
  <Modal>
    <template v-slot:header>
      <button
          type="button"
          class="btn-close"
          @click="closeSignUpModal"
      >
        <span class="close">X</span>
      </button>
    </template>

    <template v-slot:body>
      <form @submit.prevent="postSignUp">
        <div class="form-group">
          <label>User Name</label>
          <input type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control">
        </div>
        <button type="button" class="btn btn-danger" @click="closeSignUpModal">Close</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </template>
  </Modal>
</template>

<script>
import modal from './Modal.vue'
export default {
name: "SignUpModal",
  props: ['closeSignUpModal'],
  components: {Modal: modal},
  setup(){
    const postSignUp = () => {
      return 1;
    }
    return {postSignUp};
  }
}
</script>

<style scoped>

</style>