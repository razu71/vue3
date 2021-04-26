<template>
  <Modal>
    <template v-slot:header>
      <button
          type="button"
          class="btn-close"
          @click="closeLoginModal"
      >
        <span class="close">X</span>
      </button>
    </template>

    <template v-slot:body>
      <form @submit.prevent="postLogin">
        <div class="form-group">
          <label>User Name</label>
          <input v-model="email" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input v-model="password" type="password" class="form-control">
        </div>
        <button type="button" class="btn btn-danger" @click="closeLoginModal">Close</button>
        <button v-if="isLoading" class="btn btn-info">Loading</button>
        <button v-else type="submit" class="btn btn-primary">Submit</button>
      </form>
    </template>
  </Modal>
</template>

<script>
import {ref} from 'vue'
import modal from './Modal.vue'
import firebase from '../../utilities/firbase.js';

export default {
  name: "LogInModal",
  props: ['closeLoginModal'],
  components: {Modal: modal, firebase},
  setup(props,_){
    const email = ref('');
    const password = ref('');
    const isLoading = ref(false);

    const postLogin = () => {
      isLoading.value = true;
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
          .then((res) => {
            isLoading.value = false;
            props.closeLoginModal();
          })
          .catch((error) => {
            isLoading.value = false;
            props.closeLoginModal();
          });
    }

    return {email, password, postLogin, isLoading};
  }
}
</script>

<style scoped>

</style>