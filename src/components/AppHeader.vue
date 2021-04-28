<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <a class="navbar-brand" href="#">Vue3 Applications</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="item in items" :key="item.to">
          <router-link :to="item.to">{{ item.title }}</router-link>
        </li>
        <li v-if="isLoggedIn" class="nav-item">
          <button type="button" class="btn" @click="logOut">Log Out</button>
        </li>
        <li v-else class="nav-item">
          <button type="button" class="btn" @click="showLoginModal">Login</button>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
import {ref, computed} from 'vue';
import firebase from '../utilities/firbase.js'
import {useStore} from 'vuex'

export default {
  components: {firebase},
  props: ['showLoginModal', 'showSignUpModal', 'logOut', 'isLoggedIn'],
  name: "AppHeader",
  setup() {
    const activeClass = ref('');
    const store = useStore();

    const items = ref([
      {title: 'Home', to: '/'},
      {title: 'Todo', to: '/todo'},
      {title: 'Calendar', to: '/calendar'},
      {title: 'Markdown', to: '/markdown'},
      {title: 'Slider', to: '/slider'}
    ]);

    const isLoggedIn = computed(() => {
        return store.state.isLoggedIn;
    })

    return {items, activeClass, isLoggedIn};
  }
}
</script>

<style scoped>

.nav-item {
  margin-right: 10px;
  padding: 10px 10px;
}
</style>