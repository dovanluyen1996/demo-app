
import Home from "./views/Home"
import Todo from "./views/Todo"
import Products from "./views/Products"
import SlideCarousel from "./views/SlideCarousel"
import product from "./components/product"

export const routes = [
	{ path: '/home', name:'home' , component: Home },
	{ path: '/todolist', name:'about' , component: Todo },
	{ path: '/products', name:'products' , component: Products },
	{ path: '/slide', name:'slide' , component: SlideCarousel },
	{ path: '/addcart', name:'product' , component: product },
]