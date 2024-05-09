<script setup>
    import Question from "../components/Question.vue"
    import QuestionHeader from "../components/QuestionHeader.vue"
    import { useRoute } from "vue-router"
    import quizes from "../data/quizes.json"
    import { ref, watch, computed } from "vue"
    import Result from "@/components/Result.vue"

    const route = useRoute()
    
    const quizesId = parseInt(route.params.id)
    const quiz = quizes.find(q => q.id ===quizesId)

    const currentQuestionIndex = ref(0)
    const numberOfCorrectAnswer = ref(0)
    const showResult= ref(false)

    // const questionStatus = ref(`${currentQuestionIndex.value} / ${quiz.questions.length}`)
    // watch(() => currentQuestionIndex.value, ()=>{
    //     questionStatus.value = `${currentQuestionIndex.value} / ${quiz.questions.length}`
    // })
    
    const questionStatus  = computed(()=> `${currentQuestionIndex.value} / ${quiz.questions.length}`)
    const barPercentage = computed(()=> `${currentQuestionIndex.value/quiz.questions.length * 100}%`)

    const onOptionSelected = (isCorrect) =>{
        if(isCorrect){
            numberOfCorrectAnswer.value++
        }
        if(quiz.questions.length -1 === currentQuestionIndex.value){
            showResult.value = true 
        }

        currentQuestionIndex.value++
    }
</script>

<template>
    <div>
       <QuestionHeader :questionStatus="questionStatus" 
                        :barPercentage="barPercentage"/>
        <div>
            <Question v-if="!showResult" :question="quiz.questions[currentQuestionIndex]"
                    @selectOption="onOptionSelected"
            /> 
            <Result 
            :correctAnswer="numberOfCorrectAnswer" 
            :questionLength="quiz.questions.length "
            v-else/>
        </div>
    </div>
    
</template>

<style scoped>
   
    
</style>