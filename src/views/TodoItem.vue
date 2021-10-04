<template>
	<div class="todo-item">
		<p>
			<input type="checkbox" v-model=" todoProps.done ">
			<span :class="{ done:todoProps.done  }">{{ todoProps.title }}</span>
		</p>
		<button @click="$emit('remove')"><i class="far fa-trash-alt"></i></button>
	</div>
</template>

<script>
export default {

  name: 'TodoItem',
  props: ['todoProps','done'] ,


};
</script>

<style lang="css" scoped>

</style>
