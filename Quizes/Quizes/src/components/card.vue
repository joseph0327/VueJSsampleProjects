<script setup>
    import {defineProps} from "vue"
    import { useRouter } from "vue-router";

    const router = useRouter()
    const {quiz} = defineProps(['quiz'])

    const navigateToQUiz = () => {
      router.push(`/quiz/${quiz.id}`)
    }

</script>

<template>
    <div class="card" @click="navigateToQUiz">
        <img :src="quiz.img" alt="">
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} questions</p>
        </div>
    </div>
</template>

<style scoped>
  /* CARDS */
.card{
  width: 290px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin: 30px 20px;
  cursor: pointer;
}

.card img{
  width: 100%;
  height: 200px;
  margin: 0;
}

.card-text{
  padding: 0 5px;
}

h2{
  font-weight: bold;
}
.options-container{
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0;
}

</style>