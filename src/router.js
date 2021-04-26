import { createRouter, createWebHistory } from "vue-router";

import Todo from './pages/Todo.vue'
import Calendar from './pages/Calender/Calander.vue'
import Home from './pages/Home.vue'
import MarkDown from './pages/markdown.vue'
import Slider from './pages/Slider.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/todo', component: Todo },
    { path: '/calendar', component: Calendar },
    { path: '/markdown', component: MarkDown },
    { path: '/slider', component: Slider },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active"
});

export default router;