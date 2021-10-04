<template>
	<div class="tabs">
		<div class="tabLinks">
			<span class="tab" 
			v-for="(tab,index) in tabs" 
			:key="index" 
			@click="selectedTabs = tab"
			:class="{activeTab: selectedTabs === tab} "
			> 
			{{ tab }}
		</span>
	</div>
	<div class="tabContent"> 
		<div class="reviews" v-show="selectedTabs === 'Reviews' ">
			<h2>Reviews</h2>
			<ul>
				<li v-for="(review,index) in reviews" :key="index">
					<h3>Name: {{ review.name }}</h3>
					<h4>Review: {{ review.review }}</h4>
					<h4>Rating: {{ review.rating }}<i class="fas fa-star" style="color:yellow"></i></h4>
				</li>
			</ul>
		</div>

		<product-review
			v-show="selectedTabs === 'Make a Review' "
		></product-review>	
	</div>
</div>
</template>

<script>
	import productReview from "./productReview"
	export default {

		name: 'product-tab',
		props: {
			reviews: {
				type: Array,
				required:true
			}
		},

		data() {
			return {
				tabs:['Reviews', 'Make a Review'],
				selectedTabs: 'Reviews',
			};
		},

		components: {
			productReview
		},

	};
</script>

<style lang="css" scoped>
</style>
