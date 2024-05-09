<script setup>
import q from "../data/quizes.json"
import {ref, watch} from "vue"
import Card from "../components/card.vue"

const quizes = ref(q)
const search = ref("")

watch(search, () => {
  const filteredQuizes = q.filter(quiz => {
    return quiz.name.toLowerCase().includes(search.value.toLowerCase().trim());
  });
  quizes.value = filteredQuizes;
});
</script>


<template>  
  <div>
    <header>
      <h1> Quizes</h1>
      <input v-model="search" text="" placeholder="Search..."></input>
    </header>
    <div class="options-container">
      <Card v-for="q in quizes" :key="q.id" :quiz="q"/>
      <!-- <div v-for="q in quizes" class="card" :key="q.id">
        <img :src="q.img" alt="">
        <div class="card-text">
          <h2>{{q.name}}</h2>
          <p>{{q.questions.length}} questions</p>
        </div>
      </div> -->
    </div>
  </div>
</template>


<style scoped>

header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  }
  
header h1 {
  font-weight: bold;
  margin-right: 30px;
  }
  
header input {
  border: none;
  background-color: rgba(128,128,128,0.1);
  padding: 10px;
  border-radius: 5px;
  }
  
  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    }


</style>