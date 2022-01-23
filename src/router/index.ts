import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import Faq from '../views/Faq.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';

// Website title
var webtitle:string = 'xthedrew - ';

// Paths
const routes:RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/projects',
        component: Projects,
        meta: {
            title: 'Projects'
        }
    },
    {
        path: '/faq',
        component: Faq,
        meta: {
            title: 'FAQ'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: 'About'
        }
    },
    {
        name: '404',
        path: '/:pathMatch(.*)*',
        component: NotFound,
        meta: {
            title: 'Oops!'
        }
    }
];

// Create the router
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// Display a 404 page
router.resolve({
    name: '404',
    params: { pathMatch: ['not', 'found'] }
}).href;

// Change the page title
router.beforeEach((to, from, next) => {
    if (to.meta.title) document.title = webtitle+to.meta.title;
    next();
});

export default router;