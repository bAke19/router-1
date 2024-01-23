<script setup>
import {useRoute, useRouter} from  "vue-router";
import {useGetData} from "@/composables/getData";

const route = useRoute()
const router = useRouter()

const back = () =>{
    router.push('/pokemons')
}

const {data, loading, getData, errorData} = useGetData()

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.nombre}`)

</script>

<template>
    <p v-if="loading"> Cargando Información</p>
    <div v-if="data">
        <img :src="data.sprites?.front_default" :alt="data.name"/>
        <h1>Poke Name: {{ $route.params.nombre }}</h1>
        <button class="btn btn-outline-dark" @click="back">Volver</button>
    </div>
    <div v-else>
        <div class="alert alert-danger mt-2" v-if="errorData">{{ errorData }}</div>
        <button class="btn btn-outline-dark" @click="back">Volver</button>
    </div>
    
</template>