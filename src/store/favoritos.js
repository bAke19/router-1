import {defineStore} from 'pinia';
import { ref } from 'vue';

export const useFavoritoStore = defineStore('favoritos', () => {

    const favoritos = ref([])

    if (localStorage.getItem('favoritos')) {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
    }

    const agregarFavorito = (poke) => {
        favoritos.value.push(poke);
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    const eliminarFavorito = (id) => {
        favoritos.value = favoritos.value.filter((item) => item.id !== id)
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    const buscarPokemon = name => favoritos.value.find(item => item.name === name)

    return{
        favoritos,
        agregarFavorito,
        eliminarFavorito,
        buscarPokemon
    }
})