<script setup>
    import { defineProps } from 'vue';

    const {questionStatus, barPercentage} = defineProps(["questionStatus","barPercentage"])

</script>

<template>
  <div>
    <header>
      <h4>Question {{questionStatus}}</h4>
      <div class="bar">
        <div class="completion" :style="{width:barPercentage}"></div>
      </div>
    </header>
  </div>
</template>

<style scoped>
    header {
        margin-top: 20px;
    }

    header h4{
        font-size:30px;
    }

    .bar {
        width: 300px;
        height: 50px;
        border: 3px solid;
        color: rgba(55, 0, 255, 0.415)
    }
    .completion{
        height: 100%;
        width:0%;
        background-color: rgba(55, 0, 255, 0.415);
    }
</style>