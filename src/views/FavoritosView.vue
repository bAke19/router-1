<script setup>
import {useFavoritoStore} from "@/store/favoritos";
import {storeToRefs} from "pinia"
import {RouterLink} from "vue-router"

const useFavorito = useFavoritoStore()
const {favoritos} = storeToRefs(useFavorito)
const {eliminarFavorito} = useFavorito
</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0">Sin Favoritos</p>
    <ul v-else class="list-group list-group-flush">
        <li v-for="poke in favoritos" 
            class="list-group-item"
            :key="poke.id">
                <div>
                    {{ poke.name }}
                </div>
                <div>
        
                    <router-link class="btn btn-warning badge-primary" :to="`/pokemons/${poke.name}`">Ver más información</router-link>
                    <button 
                        @click="eliminarFavorito(poke.id)"
                        class="btn btn-sm btn-danger">
                        Eliminar
                    </button>
                    
                </div>
        </li>
    </ul>
</template>