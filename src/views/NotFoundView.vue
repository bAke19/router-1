<script setup>
import {useRouter} from  "vue-router"

const router = useRouter()

const volver = () => {
    router.push('/')
}
</script>

<template>
    <h1>404</h1>
    <button class="btn btn-outline-dark" @click="volver">Volver al Menú Principal</button>
</template>