<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const { correctAnswer, questionLength } = defineProps(["correctAnswer", "questionLength"])
</script>

<template>
  <div class="results">
    <p>Your Results...</p>
    <h1>{{ correctAnswer }}/{{ questionLength }}</h1>
    <RouterLink to="/">Go back</RouterLink>
  </div>
</template>

<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
  opacity: 0;
  animation: fadeInAndScale 0.5s forwards;
}

@keyframes fadeInAndScale {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

p {
  font-size: 25px;
}

h1 {
  font-size: 80px;
}

RouterLink {
  display: block;
  margin-top: 20px;
  text-decoration: none;
  color: #333;
  font-size: 20px;
  transition: color 0.3s;
}

RouterLink:hover {
  color: #555;
}
</style>
