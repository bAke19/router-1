import {defineStore} from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    
    const incrementar = () => count.value ++

    const double = computed(() => count.value*2)

    return {
        count,
        incrementar,
        double
    }
})

/* export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    actions: {
        incrementar(){
            this.count ++
        }
    },
    getters:{
        double: (state) => state.count * 2
    }
}) */