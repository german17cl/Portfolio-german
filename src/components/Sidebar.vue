<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
    Menu,
    X,
    Github,
    Linkedin
} from 'lucide-vue-next'

const isMenuOpen = ref(false)
const activeSection = ref('home')

const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']

const updateActiveSection = () => {
    let current = 'home'

    for (const section of sections) {
        const el = document.getElementById(section)

        if (el) {
            const rect = el.getBoundingClientRect()

            if (rect.top <= 120 && rect.bottom >= 120) {
                current = section
            }
        }
    }

    activeSection.value = current
}

onMounted(() => {
    window.addEventListener('scroll', updateActiveSection)
})

onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>

    <!-- HEADER MOVIL -->
    <header class="fixed top-0 left-0 right-0 z-50
            flex items-center justify-between
            px-6 py-4
            bg-slate-950
            border-b border-slate-800
            lg:hidden">

        <h1 class="font-bold text-lg">
            Germán Campiño
        </h1>

        <button @click="isMenuOpen = !isMenuOpen">
            <Menu v-if="!isMenuOpen" />
            <X v-else />
        </button>

    </header>

    <!-- MENU MOVIL -->
    <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">

        <div v-if="isMenuOpen" class="fixed inset-0 z-40 bg-slate-950 flex items-center justify-center lg:hidden">

            <nav>
                <ul class="flex flex-col gap-8 text-2xl text-center">

                    <li>
                        <a href="#home" @click="isMenuOpen = false" :class="activeSection === 'home'
                            ? 'text-white'
                            : 'text-slate-300 hover:text-white transition-colors duration-200'">
                            Inicio
                        </a>
                    </li>

                    <li>
                        <a href="#about" @click="isMenuOpen = false" :class="activeSection === 'about'
                            ? 'text-white'
                            : 'text-slate-300 hover:text-white transition-colors duration-200'">
                            Sobre mí
                        </a>
                    </li>

                    <li>
                        <a
                            href="#skills"
                            @click="isMenuOpen = false"
                            :class="activeSection === 'skills'
                                ? 'text-white'
                                : 'text-slate-300 hover:text-white transition-colors duration-200'"
                        >
                            Tecnologías
                        </a>
                    </li>

                    <li>
                        <a href="#experience" @click="isMenuOpen = false" :class="activeSection === 'experience'
                            ? 'text-white'
                            : 'text-slate-300 hover:text-white transition-colors duration-200'">
                            Experiencia
                        </a>
                    </li>

                    <li>
                        <a href="#projects" @click="isMenuOpen = false" :class="activeSection === 'projects'
                            ? 'text-white'
                            : 'text-slate-300 hover:text-white transition-colors duration-200'">
                            Proyectos
                        </a>
                    </li>

                    <li>
                        <a href="#contact" @click="isMenuOpen = false" :class="activeSection === 'contact'
                            ? 'text-white'
                            : 'text-slate-300 hover:text-white transition-colors duration-200'">
                            Contacto
                        </a>
                    </li>

                </ul>

                <div class="flex justify-center gap-6 mt-12">

                    <a href="https://github.com/german17cl" target="_blank">
                        <Github />
                    </a>

                    <a href="https://www.linkedin.com/in/germancampdev/" target="_blank">
                        <Linkedin />
                    </a>

                </div>

            </nav>

        </div>

    </Transition>

    <!-- SIDEBAR DESKTOP -->
    <aside class="hidden lg:flex
                w-80
                h-screen
                sticky top-0
                border-r border-slate-800
                p-8
                flex-col
                justify-between">

        <div>

            <h1 class="text-2xl font-bold">
                Germán Campiño
            </h1>

            <p class="text-slate-400 mt-2">
                Desarrollador Web
            </p>

            <nav class="mt-12">

                <ul class="space-y-6">

                    <li>
                        <a href="#home" :class="activeSection === 'home'
                            ? 'text-white'
                            : 'text-slate-400 hover:text-white transition-colors duration-200'">
                            Inicio
                        </a>
                    </li>

                    <li>
                        <a href="#about" :class="activeSection === 'about'
                            ? 'text-white'
                            : 'text-slate-400 hover:text-white transition-colors duration-200'">
                            Sobre mí
                        </a>
                    </li>

                    <li>
                        <a
                            href="#skills"
                            :class="activeSection === 'skills'
                                ? 'text-white'
                                : 'text-slate-400 hover:text-white transition-colors duration-200'"
                        >
                            Tecnologías
                        </a>
                    </li>

                    <li>
                        <a href="#experience" :class="activeSection === 'experience'
                            ? 'text-white'
                            : 'text-slate-400 hover:text-white transition-colors duration-200'">
                            Experiencia
                        </a>
                    </li>

                    <li>
                        <a href="#projects" :class="activeSection === 'projects'
                            ? 'text-white'
                            : 'text-slate-400 hover:text-white transition-colors duration-200'">
                            Proyectos
                        </a>
                    </li>

                    <li>
                        <a href="#contact" :class="activeSection === 'contact'
                            ? 'text-white'
                            : 'text-slate-400 hover:text-white transition-colors duration-200'">
                            Contacto
                        </a>
                    </li>

                </ul>

            </nav>

        </div>

        <div class="flex gap-4">

            <a href="https://github.com/german17cl" target="_blank">
                <Github />
            </a>

            <a href="https://linkedin.com/in/germancampdev" target="_blank">
                <Linkedin />
            </a>

        </div>

    </aside>

</template>