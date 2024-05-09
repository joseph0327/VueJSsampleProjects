<script setup>
    import {RouterLink} from "vue-router"
    import cars from "../data/cars.json"
</script>

<template>
    <h1>Home View</h1>
    <div class="cars">
        <RouterLink v-for="car in cars" :key="car.id" :to="`cars/${car.id}`">
            {{car.name}}
        </RouterLink>
    </div>
</template>

<style scoped>
.cars{
    display: flex;
}

.cars a{
    text-decoration: none;
    color: rgba(0, 0, 0, 0.67);
    width: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    border-radius: 2px;
    margin: 20px 20px
}
</style>