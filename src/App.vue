<template>
  <AppHeader :showLoginModal="showLoginModal" :showSignUpModal="showSignUpModal" :logOut="logOut" :isLoggedIn="isLoggedIn"/>
  <router-view></router-view>
  <teleport to="body">
    <LoginModal v-show="isLoginModalVisible" @close="closeLoginModal" :closeLoginModal="closeLoginModal"/>
    <SignUpModal v-show="isSignUpModalVisible" @close="closeSignUpModal" :closeSignUpModal="closeSignUpModal"/>
  </teleport>
</template>

<script>
import {ref, onMounted} from "vue"
import AppHeader from './components/AppHeader.vue'
import LoginModal from './components/Modal/LogInModal.vue'
import SignUpModal from './components/Modal/SignUpModal.vue'
import firebase from './utilities/firbase.js'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'

export default {
  inheritAttrs: false,
  components: {AppHeader, LoginModal, SignUpModal, firebase},
  setup() {
    const isLoginModalVisible = ref(false);
    const isSignUpModalVisible = ref(false);
    const isLoggedIn = ref(false);
    const authUser = ref({});
    const router = useRouter()
    const store = useStore()

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
          store.commit("setIsLoggedIn", true);
          store.commit("setLoginModal", false);
          store.commit("setAuthUser", user);
        } else {
          store.commit("setIsLoggedIn", false);
          store.commit("setAuthUser", {});
        }
      });
    })

    //logout a user
    const logOut = () => {
      firebase.auth().signOut().then(() => {
        store.commit("setIsLoggedIn", false);
        store.commit("setAuthUser", {});
        router.replace('/')
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
      isLoggedIn
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
