import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login";
import StartGame from "../views/StartGame"
import GameCode from "../views/GameCode";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/startgame',
    name: 'StartGame',
    component: StartGame
  },
  {
    path: '/gamecode',
    name: 'GameCode',
    component: GameCode
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "",
})

export default router
