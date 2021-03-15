import { createRouter, createWebHistory} from 'vue-router'
// import Home from '../views/Home.vue'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')

const routes = [
  {
    path: '',
    name: Home,
    redirect: '/home'
  },
  {
    path: '/home',
    name: Home,
    component: Home
  },
  {
    path: '/cart',
    name: Cart,
    component: Cart
  } ,
  {
    path: '/category',
    name: Category,
    component: Category
  } ,
  {
    path: '/profile',
    name: Profile,
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
