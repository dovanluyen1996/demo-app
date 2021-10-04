<template>
  <div class="todo-list">  
    <h2>Todo List</h2>
    <div class="form-add-item">
      <input type="text" placeholder="New Todo" v-model="newTodos" class="newTodo" @keyup.enter="addItem">
      <button class="addTodo"
          @click="addItem()"
      >
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <TodoItem 
      v-for="(todo,index) in todos" 
      v-bind:key="todo.id" 
      v-bind:todoProps="todo" 
      v-bind:done="done" 
      @remove="removeItem(index)"
    />

    <button class="clearAll"  @click="ClearAll()">Clear All</button>
  </div>
</template>

<script>
  import TodoItem from "./TodoItem"
  import axios from "axios"
export default {

  name: 'About',

  data() {
    return {
        newTodos:"",
        todos: []
    };
  },

  async created () {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4');
      this.todos = res.data;
    } catch(e) {
      console.error(e);
    }
  },

  methods: {
    addItem(){
        this.todos.push({ 
          title: this.newTodos, 
          done:false 
        })
        this.newTodos = "";
    },

    removeItem(index) {
        this.todos.splice(index,1);
    },

    ClearAll() {
      this.todos =[];
    }

  },

  components: {
    TodoItem,
  },

};
</script>

<style lang="css" scoped>
  
</style>
