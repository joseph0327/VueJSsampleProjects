// Define our routing rules

import AboutView from "@/view/AboutView.vue";
import HomeView from "@/view/HomeView.vue";
import CarView from "@/view/CarView.vue";
import ContactView from "../view/ContactView.vue";
import NotFoundView from "@/view/NotFoundView.vue";


import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name:"home",
            component: HomeView,
        },
        {
            path:"/home",
            redirect:"/"
        },
        {
            path:"/about",
            name:"about",
            component: AboutView,
        },
        {
            path:"/cars/:id",
            name:"car",
            component: CarView,
            children:[
                {
                    path:"contact",
                    component:ContactView
                }
            ]
        },
        {
            path:"/:catchall(.*)*",
            name:"Not Found",
            component: NotFoundView,
        },

    ]

})

export default router