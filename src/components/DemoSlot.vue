<template>
	<div class="demo-slot">
		<h1>Alo Slot Slot</h1>
		<slot></slot>
	</div>
</template>

<script>
export default {

  name: 'demo-slot',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
	h1 {
		color: blue;
	}
</style>
