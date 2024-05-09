<script setup>
    import { useRoute, useRouter, RouterView } from 'vue-router';
    import cars from "../data/cars.json"
    import ContactView from './ContactView.vue';
 

    const route = useRoute()
    const router = useRouter()
    
    const carsId = parseInt(route.params.id)
    const car = cars.find(c => c.id === carsId)

    // it will not show the contact of number for 4
    const showContact = () =>{
        if (carsId===4) return;
        return router.push(`/cars/${carsId}/contact`)
    }
</script>

<template>
    <div v-if="car">
        <h1>Car View</h1>
        <p>Car name: {{car.name}}</p>
        <p>Year: {{car.year}}</p>
        <p>Car Price: {{car.price}}</p>
        <button @click="showContact">Click for contact</button>
        <RouterView />
    </div>
    <div v-else>
        car not found
    </div>
 
</template>