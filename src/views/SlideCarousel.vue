<template>
	<div class="slide-carousel">
		<Carousel @next='next' @prev='prev'>
			<CarouSlide v-for="(slide, index) in slides" 
			:key="slide"
			:index="index"
			:visibleSlide="visibleSlide"
			:direction="direction"
			>
			<img :src="require('../assets/images/' + slide.image)">
			
		</CarouSlide>
	</Carousel>
</div>

</template>

<script>
	import Carousel from "../components/Carousel.vue"
	import CarouSlide from "../components/CarouSlide.vue"
	export default {
		name: 'SlideCarousel',

		data() {
			return {
				slides: [
					{image: 'honda1.jpg'},
					{image: 'honda2.jpg'},
					{image: 'honda3.jpg'},
					{image: 'honda4.jpg'},
				],
				visibleSlide: 0,
				// direction:'left',
			}
		},

		computed:{
			slidesLen() {
				return this.slides.length;
			}
		},

		methods:{
			next() {
				if(this.visibleSlide >= this.slidesLen-1){
					this.visibleSlide = 0;
				}else {
					this.visibleSlide++;
				}
				//huong chuyen image
				this.direction = "left"
			},

			prev() {
				if(this.visibleSlide <= 0){
					this.visibleSlide = this.slidesLen - 1;
				}else {
					this.visibleSlide--;
				}
				//huong chuyen image
				this.direction = "right"
			}
		},

		components: {
			Carousel,
			CarouSlide
		},

	};
</script>

<style lang="css" scoped>
	.slide-carousel {
		margin-top: 60px;
		display: flex;
		justify-content: center;
	}
	.slide-carousel img {
		width: 100%;
		height: 100%;
	}
</style>
