<script setup>
import { defineProps, defineEmits } from 'vue';

const {question} = defineProps(['question'])
const emit = defineEmits(["selectOption"])

const emitSelectionOption = (isCorrect) => {
  emit("selectOption", isCorrect)
}
</script>

<template>
  <div>
    <div class="question-container">
      <h1 class="question">{{ question.text }}</h1>
      <div class="answer-container">
        <div v-for="option in question.options" class="option" :key="option.id" @click="emitSelectionOption(option.isCorrect)">
          <p  class="option-label">{{ option.label }}</p>
          <div class="option-value">{{option.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
    .question-container{
        margin-top: 20px;

    }

    .question{
        font-size: 40px;
        margin-bottom: 20px;
    }

    .option{
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .option-label{
        background-color:rgba(55, 0, 255, 0.415) ;
        width: 50px;
        height: 50px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .option-value{
        background-color:rgba(0, 191, 255, 0.415);
        width: 100%;
        height: 50px;
        font-size: 30px;
        padding: 0px 10px;
    }
    .option-value:hover{
      background-color:rgba(0, 191, 255, 0.755);
    }
</style>
