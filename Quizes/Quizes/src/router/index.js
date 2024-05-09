import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../views/QuizesView.vue"
import QuizViewContent from "@/views/QuizViewContent.vue";

const router  = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            name:"quizes",
            component:QuizesView
        },
        {
            path:"/quiz/:id",
            name:"quizviewcontent",
            component:QuizViewContent
        }   
    ]
})

export default router