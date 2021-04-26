<template>
  <AppHeader :showLoginModal="showLoginModal" :showSignUpModal="showSignUpModal" :logOut="logOut"/>
  <router-view></router-view>
  <LoginModal v-show="isLoginModalVisible" @close="closeLoginModal" :closeLoginModal="closeLoginModal"/>
  <SignUpModal v-show="isSignUpModalVisible" @close="closeSignUpModal" :closeSignUpModal="closeSignUpModal"/>
</template>

<script>
import {ref, onMounted} from "vue"
import AppHeader from './components/AppHeader.vue'
import LoginModal from './components/Modal/LogInModal.vue'
import SignUpModal from './components/Modal/SignUpModal.vue'
import firebase from './utilities/firbase.js'
import router from "./router";

export default {
  inheritAttrs: false,
  components: {AppHeader, LoginModal, SignUpModal, firebase},
  setup() {
    const isLoginModalVisible = ref(false);
    const isSignUpModalVisible = ref(false);
    const isLoggedIn = ref(false);
    const authUser = ref({});

    const showLoginModal = () => {
      isLoginModalVisible.value = true;
    }

    const showSignUpModal = () => {
      isSignUpModalVisible.value = true;
    }

    const closeSignUpModal = () => {
      isSignUpModalVisible.value = false;
    }

    const closeLoginModal = () => {
      isLoginModalVisible.value = false;
    }

    //check user logged in or not
    onMounted(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          isLoggedIn.value = true
          authUser.value = user
        } else {
          isLoggedIn.value = false
          authUser.value = {}
        }
      });
    })

    //logout a user
    const logOut = () =>{
      firebase.auth().signOut().then(() => {
        isLoggedIn.value = false
        authUser.value = {}
        router.push('/')
      }).catch((error) => {
        console.log(error)
      });
    }

    return {
      isLoginModalVisible,
      isSignUpModalVisible,
      showLoginModal,
      showSignUpModal,
      closeLoginModal,
      closeSignUpModal,
      logOut,
    };
  }
}
</script>
<style>
.active, .active:hover {
  background-color: #000000;
  padding: 5px;
  color: #fff;
}
</style>
