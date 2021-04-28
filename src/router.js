import { createRouter, createWebHistory } from "vue-router";

import Todo from './pages/Todo.vue'
import Calendar from './pages/Calender/Calander.vue'
import Home from './pages/Home.vue'
import MarkDown from './pages/markdown.vue'
import Slider from './pages/Slider.vue'
import store from "./Store/index";

const routes = [
    // { path: '/:pathMatch(.*)*', component: Calendar },
    { path: '/', component: Home, alias: '/home' },
    { path: '/todo', component: Todo },
    { path: '/calendar', component: Calendar },
    { path: '/markdown', component: MarkDown },
    { path: '/slider', component: Slider, meta: {middleware: "auth"} },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active"
});

router.beforeEach((to, _, next) => {
    if (to.meta.middleware) {
        import(`./middleware/${to.meta.middleware}`).then((res) => {
            if (res) {
                res.default(next, store);
            } else {
                next();
            }
        });
    } else {
        next();
    }
});

export default router;