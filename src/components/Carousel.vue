<template>
	<div class="Carousel">
		<slot></slot>

		<button @click="next" class="next">Next</button>
		<button @click="prev" class="prev">Prev</button>
	</div>
</template>

<script>
	export default {
		name: 'carousel',
		methods: {
			next() {
				this.$emit('next')
			},
			prev() {
				this.$emit('prev')
			}
		}
		
	};
</script>

<style lang="css" scoped>
	.Carousel {
		position: relative;
		width: 600px;
		height: 300px;
		border: 1px solid red;
		overflow: hidden;
	}
	.next,.prev {
		position: absolute;
		z-index: 3;
		padding: 5px 10px;
		top: 50%;
		background: rgba(0, 0, 0, 1.0);
		color: #fff;
		border: none;
		cursor: pointer;
	}
	.next {
		left: 0;
	}
	.prev {
		right: 0;
	}
</style>
