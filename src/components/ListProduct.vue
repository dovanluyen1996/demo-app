<template>
	<div>
		<h1>List Product</h1>
		<user 
			v-for="user in listProduct"
			v-bind:key="user.id"
			v-bind:user="user"
		/>
	</div>
</template>

<script>
	import user from './user.vue'
	export default {

		name: 'ListProduct',

		props: {
			listProduct: {
				type: Array,
			}
		},

		data() {
			return {

			};
		},

		components: {
			user
		}
	};
</script>
