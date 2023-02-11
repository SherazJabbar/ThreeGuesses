import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login";
import StartGame from "../views/StartGame"
import GameCode from "../views/GameCode";
import CreateAccount from "../views/CreateAccount";
import EnterCode from "../views/EnterCode";
import Lobby from "../views/LobbyScreen";
import Prompt from "../views/PromptScreen";
import GuessTitle from "../views/GuessTitle";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/createaccount',
    name: 'CreateAccount',
    component: CreateAccount
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
  {
    path: '/entercode',
    name: 'EnterCode',
    component: EnterCode
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby
  },
  {
    path: '/prompt',
    name: 'Prompt',
    component: Prompt
  },
  {
    path: '/guesstitle',
    name: 'GuessTitle',
    component: GuessTitle
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "",
})

export default router
