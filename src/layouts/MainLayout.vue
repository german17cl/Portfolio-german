<template>
    <div class="min-h-screen flex bg-slate-950 text-white">

        <BackgroundBlobs :colors="themes[currentTheme]" />
        
        <div
            ref="themePicker"
            class="fixed bottom-6 right-6 z-[9999]"
        >

            <!-- MENU -->
            <Transition
                enter-active-class="transition-all duration-300"
                enter-from-class="opacity-0 translate-y-4 scale-75"
                enter-to-class="opacity-100 translate-y-0 scale-100"
                leave-active-class="transition-all duration-200"
                leave-from-class="opacity-100 translate-y-0 scale-100"
                leave-to-class="opacity-0 translate-y-4 scale-75"
            >

                <div
                    v-if="isThemeMenuOpen"
                    class="
                        absolute
                        bottom-16
                        right-0
                        flex
                        flex-col
                        gap-3
                        
                    "
                >
                    <!-- botones colores -->
                    <button
                        class="w-8 h-8 rounded-full bg-red-500 hover:scale-110 transition cursor-pointer"
                        @click="
                            currentTheme='red';
                            isThemeMenuOpen=false;
                        "
                    ></button>

                    <button
                        class="w-8 h-8 rounded-full bg-green-500 hover:scale-110 transition cursor-pointer"
                        @click="
                            currentTheme='green';
                            isThemeMenuOpen=false;
                        "
                    ></button>

                    <button
                        class="w-8 h-8 rounded-full bg-yellow-500 hover:scale-110 transition cursor-pointer"
                        @click="
                            currentTheme='yellow';
                            isThemeMenuOpen=false;
                        "
                    ></button>

                    <button
                        class="w-8 h-8 rounded-full bg-sky-400 hover:scale-110 transition cursor-pointer"
                        @click="
                            currentTheme='lightBlue';
                            isThemeMenuOpen=false;
                        "
                    ></button>

                    <button
                        class="w-8 h-8 rounded-full bg-white border border-slate-300 hover:scale-110 transition cursor-pointer"
                        @click="
                            currentTheme='white';
                            isThemeMenuOpen=false;
                        "
                    ></button>

                    <button
                        class="w-8 h-8 rounded-full bg-blue-600 hover:scale-110 transition cursor-pointer"
                        @click="
                            currentTheme='blue';
                            isThemeMenuOpen=false;
                        "
                    ></button>
                </div>

            </Transition>

            <!-- BOTON PRINCIPAL -->
            <button
                @click="isThemeMenuOpen = !isThemeMenuOpen"
                class="
                    w-12
                    h-12
                    rounded-full
                    border border-slate-700
                    shadow-lg
                    transition-all duration-300
                    hover:scale-110
                    cursor-pointer
                "
                :style="{
                    backgroundColor: themes[currentTheme].primary
                }"
            >
                <Palette
                    class="w-5 h-5 mx-auto text-white"
                />
            </button>

        </div>
        <Sidebar />

        <main class="flex-1 overflow-y-auto pt-16 lg:pt-0">
            <slot />
        </main>

    </div>
</template>

<script setup>
import {   ref, onMounted, onUnmounted, provide } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import BackgroundBlobs from '../components/BackgroundBlobs.vue'
import {
    Palette
} from 'lucide-vue-next'

const isThemeMenuOpen = ref(false)
const themePicker = ref(null)

const handleClickOutside = (event) => {
    if (
        themePicker.value &&
        !themePicker.value.contains(event.target)
    ) {
        isThemeMenuOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})

const themes = {
    blue: {
        primary: '#2563eb',
        secondary: '#1d4ed8',
        accent: '#3b82f6'
    },

    lightBlue: {
        primary: '#38bdf8',
        secondary: '#0ea5e9',
        accent: '#7dd3fc'
    },

    green: {
        primary: '#16a34a',
        secondary: '#22c55e',
        accent: '#4ade80'
    },

    yellow: {
        primary: '#ca8a04',
        secondary: '#eab308',
        accent: '#fde047'
    },

    red: {
        primary: '#dc2626',
        secondary: '#ef4444',
        accent: '#f87171'
    },
    white: {
        primary: '#e5e7eb',
        secondary: '#f8fafc',
        accent: '#ffffff'
    }
}

const currentTheme = ref('blue')

provide('currentTheme', currentTheme)
provide('themes', themes)
</script>