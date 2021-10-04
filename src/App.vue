<template>
  <div id="app">
    <Header />
    <div class="show">  
        <transition name="scale" mode="out-in">
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </transition>
    </div>
  <footer>
   <h1>Footer</h1>
 </footer>
</div>
</template>

<script>

  import Header from './components/Header.vue'

  export default {
    name: 'App',

    data() {
      return {

      }
    },

    components: {
      Header,
    },

    methods: {

    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  footer {
    margin-top: 60px;
    padding: 20px;
    border: 1px solid red;
  }
  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.5s ease;
  }


  .scale-enter-from,
  .scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
</style>
