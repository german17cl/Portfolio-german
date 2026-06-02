<script setup>import {
    Menu,
    X,
    Github,
    Linkedin
} from 'lucide-vue-next'
</script>
<template>
    <section class="min-h-screen flex flex-col justify-center items-center text-center" id="home">
        <h1 class="text-6xl font-bold">
            Hola, soy Germán Campiño
        </h1>

        <p class="text-xl mt-4">
            Frontend Developer Junior
        </p>

        <div class="flex gap-4 mt-8">
            <a href="https://github.com/german17cl" target="_blank" class="px-6 py-2 flex gap-3 items-center border border-slate-700 rounded
                text-slate-300
                hover:text-white hover:border-slate-400
                transition-all duration-200
                hover:-translate-y-0.5">
                GitHub
                <Github />
            </a>

            <a href="https://linkedin.com/in/germancampdev" target="_blank" class="px-6 py-2 flex gap-3 items-center border border-slate-700 rounded
                text-slate-300
                hover:text-white hover:border-slate-400
                transition-all duration-200
                hover:-translate-y-0.5">
                LinkedIn
                <Linkedin />
            </a>
        </div>
    </section>
</template>