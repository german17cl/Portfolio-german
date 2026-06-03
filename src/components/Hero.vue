<script setup>
import { ref, onMounted } from 'vue'
import {
    Github,
    Linkedin,
    Download
} from 'lucide-vue-next'

const isVisible = ref(false)

const fullText = 'Frontend Developer Junior'
const typedText = ref('')

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true
    }, 100)

    let index = 0

    const typing = setInterval(() => {
        if (index < fullText.length) {
            typedText.value += fullText[index]
            index++
        } else {
            clearInterval(typing)
        }
    }, 80)
})

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true
    }, 100)
})


</script>
<template>
    <section
        id="home"
        :class="[
            'min-h-screen flex flex-col justify-center items-center text-center transition-all duration-1000',
            isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
        ]"
    >
        <h1 class="text-6xl font-bold">
            Hola, soy Germán Campiño
        </h1>

        <p class="text-xl mt-4 h-8 text-slate-300">
            {{ typedText }}
            <span class="animate-pulse">|</span>
        </p>

        <div  class="
                flex
                flex-col
                sm:flex-row
                gap-4
                mt-8
            "
        >
            <a href="https://github.com/german17cl" target="_blank" class="px-6 py-2 flex gap-3 items-center border border-slate-700 rounded
                text-slate-300
                hover:text-white hover:border-slate-400
                transition-all duration-200
                hover:-translate-y-0.5">
                
                <Github />
                GitHub
                
            </a>

            <a href="https://linkedin.com/in/germancampdev" target="_blank" class="px-6 py-2 flex gap-3 items-center border border-slate-700 rounded
                text-slate-300
                hover:text-white hover:border-slate-400
                transition-all duration-200
                hover:-translate-y-0.5">
                <Linkedin />
                LinkedIn
                
            </a>

            <a href="/cv-german-campino.pdf"
                download
                class="px-6 py-2 flex gap-3 items-center border border-slate-700 rounded
                    text-slate-300
                    hover:text-white hover:border-slate-400
                    transition-all duration-200
                    hover:-translate-y-0.5"
            >

                <Download />

                Descargar CV

            </a>
        </div>
    </section>
</template>