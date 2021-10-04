<template>
	<header>
		<div class="container">
			<nav>
				<ul class="nav-menu">
					<li><router-link to="/home">Home</router-link></li>
					<li><router-link to="/products">Product</router-link></li>
					<li><router-link to="/todolist">TodoList</router-link></li>
					<li><router-link to="/slide">Slide</router-link></li>
					<li><router-link to="/addcart">Add To Cart</router-link></li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
	export default {

		name: 'Header',

		props: {
			title: String
		},
		data() {
			return {

			};
		},
	};
</script>


