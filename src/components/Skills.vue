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
    { name: 'Vue 3', color: '#22c55e', icon: '/src/assets/skills/vue.svg'},
    { name: 'Vite', color: '#a855f7', icon: '/src/assets/skills/vite.png' },
    { name: 'TailwindCSS', color: '#38bdf8', icon: '/src/assets/skills/tailwindcss.png' },
    { name: 'Git', color: '#ef4444', icon: '/src/assets/skills/git.png' },
    { name: 'GitHub', color: '#ffffff', icon: '/src/assets/skills/github.png' },
    { name: 'Node.js', color: '#16a34a', icon: '/src/assets/skills/nodejs.png' },
    { name: 'PHP', color: '#6366f1', icon: '/src/assets/skills/php.png' },
    { name: 'MySQL', color: '#0ea5e9', icon: '/src/assets/skills/mysql.png' },
    { name: 'Java', color: '#ef4444', icon: '/src/assets/skills/java.png' },
    { name: 'Docker', color: '#2563eb', icon: '/src/assets/skills/docker.png' },
    
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

        <p class="text-slate-400 max-w-2xl mb-12">
            A lo largo de mi formación como desarrollador he trabajado con distintas tecnologías del ecosistema web, enfocándome en crear aplicaciones modernas, responsivas y con buenas prácticas de desarrollo.
        </p>

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
                    class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition"
                    :style="{ background: skill.color }"
                ></div>
                <!-- ICON -->
                <img
                    :src="skill.icon"
                    :alt="skill.name"
                    class="relative z-10 w-16 h-16 object-contain mx-auto mb-4"
                >

                <!-- CONTENT -->
                <div class="relative z-10 flex flex-col items-center text-center gap-3">
                    

                    <!-- NAME -->
                    <span class="text-slate-200 font-medium">
                        {{ skill.name }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>