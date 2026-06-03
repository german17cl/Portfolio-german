<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true
    }, 150)
})

const skills = [
    { name: 'HTML', color: '#f97316', icon: '/src/assets/skills/html.png' },
    { name: 'CSS', color: '#3b82f6', icon: '/src/assets/skills/css.png' },
    { name: 'JavaScript', color: '#facc15', icon: '/src/assets/skills/javascript.png' },
    { name: 'Vue 3', color: '#22c55e', icon: '/src/assets/skills/vue.png'},
    { name: 'Vite', color: '#a855f7', icon: '/src/assets/skills/vite.png' },
    { name: 'TailwindCSS', color: '#38bdf8', icon: '/src/assets/skills/tailwindcss.png' },
    { name: 'Git', color: '#ef4444', icon: '/src/assets/skills/git.png' },
    { name: 'GitHub', color: '#ffffff', icon: '/src/assets/skills/github.png' },
    { name: 'Node.js', color: '#16a34a', icon: '/src/assets/skills/nodejs.png' },
    { name: 'PHP', color: '#6366f1', icon: '/src/assets/skills/php.png' },
    { name: 'MySQL', color: '#0ea5e9', icon: '/src/assets/skills/mysql.png' },
]
</script>

<template>
    <section
        id="skills"
        class="min-h-screen px-6 lg:px-16 py-24"
    >
        <!-- TITLE -->
        <h2 class="text-4xl font-bold mb-12">
            Tecnologías
        </h2>

        <!-- GRID -->
        <div
            class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
            <div
                v-for="(skill, index) in skills"
                :key="skill.name"
                :style="{ transitionDelay: index * 60 + 'ms' }"
                :class="[
                    'group relative p-6 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-md',
                    'hover:-translate-y-2 hover:border-slate-600 transition-all duration-300',
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-6'
                ]"
            >
                <!-- GLOW EFFECT -->
                <div
                    class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition"
                    :style="{ background: skill.color }"
                ></div>

                <!-- CONTENT -->
                <div class="relative z-10 flex flex-col items-center text-center gap-3">
                    <!-- DOT -->
                    <div
                        class="w-3 h-3 rounded-full"
                        :style="{ background: skill.color }"
                    ></div>

                    <!-- NAME -->
                    <span class="text-slate-200 font-medium">
                        {{ skill.name }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>