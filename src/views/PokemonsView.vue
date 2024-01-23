<script setup>
    import {RouterLink} from "vue-router";
    import {useGetData} from "@/composables/getData";

    const {data, getData, loading, errorData} = useGetData()
    getData('https://pokeapi.co/api/v2/pokemon')

</script>

<template>
    <h1>Pokemons</h1>
    <p v-if="loading"> Cargando Información</p>
    <div class="alert alert-danger mt-2" v-if="errorData">{{ errorData }}</div>
    <div v-if="data">
        <ul class="list-group list-group-flush">
            <li class="list-group-item"  v-for="pokemon in data.results">
                <router-link :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</router-link>
            </li>
        </ul>
        <dv class="mt-2">
            <button 
            :disabled="!data.previous"
            class="btn btn-sm btn-warning me-2" 
            @click="getData(data.previous)">Preview</button>
        <button :disabled="!data.next" class="btn btn-primary me-2" @click="getData(data.next)">Next</button>

        </dv>
    </div>
    
</template>