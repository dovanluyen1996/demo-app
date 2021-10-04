<template>
	<!-- product -->
	<div>
	<div class="container">
		<div class="shoppy-cart">
			<i class="fas fa-cart-arrow-down">{{cart}}</i>
		</div>
		<div class="pro-add">

			<div class="product">
				<div class="image">
					<img :src="productImage" alt="">
				</div>
				<div class="content">
					<h1>{{title}}</h1>
					<div class="stockInfo">
						<span class="black" v-if="inventory > 10">In Stock</span>
						<span class="amber" v-else-if="inventory <= 10 && inventory > 0">Only few left</span>
							<span class="red" v-else>Out of Stock</span>
						</div>
						<ul class="features">
							<li v-for="(feature,index) in features" :key="index">
								{{ feature }}
							</li>
						</ul>
						<div class="variants">
							<span 
							v-for="(variant,index) in variants" 
							:key="variant.variantId"
							@click="updateImage(index)"
							class="colorBox" 
							:style="{backgroundColor: variant.variantColor}"
							>

						</span>
					</div>
					<div class="shipping">Shipping:</div>
					<div class="addCart">
						<button @click="AddToCart">
							Add to Cart
						</button>
					</div>
				</div>
			</div>


			<product-tab :reviews="reviews"></product-tab>
		</div>
	</div>

	<ProductZoomer/>
	</div>
</template>

<script>
	import { eventBus } from '../main.js';
	import productTab from "./productTab"
	export default {
		name: 'product',
			data() {
				return {
				brand: 'Nike',
				productTitle: 'Air Force',
				selectedVariant:0,
					// productImage: require('../assets/images/shoes/nike-black.jpg'),
					cart: 0,
					features: [ "Durable leather", "Secure lace up", "Padded ankle collar" ],
					variants: [
						{
							variantId: 1,
							variantColor: "red",
							variantImage: require('../assets/images/shoes/nike-red.jpg'),
							variantQty: 0,
						},
						{
							variantId: 2,
							variantColor: "white",
							variantImage: require('../assets/images/shoes/nike-white.jpg'),
							variantQty: 5,
						},
						{
							variantId: 3,
							variantColor: "black",
							variantImage: require('../assets/images/shoes/nike-black.jpg'),
							variantQty: 20,
						},
					],

					reviews: [],


					
				};
			},

			methods: {
				AddToCart() {
					this.cart += 1;
				},

				updateImage(index) {
					this.selectedVariant = index;
				},

			},

			computed: {
				title() {
					return this.brand + ' ' + this.productTitle;
				},

				productImage() {
					return this.variants[this.selectedVariant].variantImage;
				},

				inventory() {
					return this.variants[this.selectedVariant].variantQty;
				},

			},

			//ham gan ket
			mounted() {
				eventBus.$on('review-submitted', productReview => {
					this.reviews.push(productReview)
				})
			},

			components: {
				productTab
			},
		};

		

		
	</script>

	<style lang="css" scoped>
	</style>
