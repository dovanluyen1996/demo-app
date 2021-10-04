<template>
  <div class="page-product">

    <div class="heading">
      <h1>{{ name }}</h1>
      <h2>{{ age }}</h2>
      <button @click="updateProfile">Change Title</button>
      <h4>A simple photo gallery built atop Vue.js</h4>
      <button @click="info">Info</button>
    </div>
    <ListProduct v-bind:listProduct="listProduct"/>
    <demo-slot>
      <h4>Lorem Slot</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate autem deserunt optio quaerat aliquid sunt beatae perferendis, sequi magni vel debitis minus, rem ea, quo dignissimos id. Hic, itaque alias!</p>
    </demo-slot>
  </div>
</template>

<script>
  import DemoSlot from "../components/DemoSlot.vue"
  import ListProduct from "../components/ListProduct.vue"
  import { mapGetters, mapMutations, mapActions } from "vuex"
  export default {

    name: 'Product',

    computed: {
       ...mapGetters(['name'])
       //chuyen store.state.name thanh this.name
    },

    methods: {
      ...mapMutations(['setName']),
      //lay setName tu mutation cua store về component
      ...mapActions(['updateProfile']),
      ...mapActions(['info'])
    },

    data() {
      return {
          listProduct: [
              {
                id: 1,
                name: 'Honda',
                active: true
              },
              
          ]
      }
    },

    components: {
        ListProduct,
        DemoSlot,
    }

  };

</script>

<style lang="css" scoped>
</style>
