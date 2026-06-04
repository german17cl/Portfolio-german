<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true
    }, 150)
})

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', color: '#f97316', icon: '/src/assets/skills/html.png' },
            { name: 'CSS', color: '#3b82f6', icon: '/src/assets/skills/css.png' },
            { name: 'JavaScript', color: '#facc15', icon: '/src/assets/skills/javascript.png' },
            { name: 'Vue', color: '#22c55e', icon: '/src/assets/skills/vue.svg' },
            { name: 'Vite', color: '#a855f7', icon: '/src/assets/skills/vite.png' },
            { name: 'TailwindCSS', color: '#38bdf8', icon: '/src/assets/skills/tailwindcss.png' },
            { name: 'XML', color: '#f97316', icon: '/src/assets/skills/xml.png' },
            { name: 'XSLT', color: '#ffffff', icon: '/src/assets/skills/xslt.png' }
        ]
    },

    {
        title: 'Backend',
        skills: [
            { name: 'PHP', color: '#6366f1', icon: '/src/assets/skills/php.png' },
            { name: 'Laravel', color: '#ef4444', icon: '/src/assets/skills/laravel.png' },
            { name: 'CodeIgniter', color: 'orange', icon: '/src/assets/skills/codeigniter.png' },
            { name: 'Node.js', color: '#16a34a', icon: '/src/assets/skills/nodejs.png' },
            { name: 'Java', color: '#ef4444', icon: '/src/assets/skills/java.png' },
            { name: 'MySQL', color: '#0ea5e9', icon: '/src/assets/skills/mysql.png' },
            
        ]
    },

    {
        title: 'Herramientas',
        skills: [
            { name: 'Git', color: '#ef4444', icon: '/src/assets/skills/git.png' },
            { name: 'GitHub', color: '#ffffff', icon: '/src/assets/skills/github.png' },
            { name: 'Docker', color: '#2563eb', icon: '/src/assets/skills/docker.png' },
            { name: 'Ciberseguridad', color: '#2563eb', icon: '/src/assets/skills/ciberseguridad.png' },
            { name: 'Windows Server', color: '#0ea5e9', icon: '/src/assets/skills/windows.png' },
            { name: 'Linux', color: 'yellow', icon: '/src/assets/skills/linux.png' },
            { name: 'Ubuntu Server', color: 'orange', icon: '/src/assets/skills/ubuntu.png' }
        ]
    }
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
            A lo largo de mi formación como desarrollador he trabajado con distintas tecnologías, enfocándome en crear aplicaciones intuitivas, funcionales, responsivas y con buenas prácticas de desarrollo.
        </p>

        <!-- GRID -->
        <div
    v-for="category in skillCategories"
    :key="category.title"
    class="mb-16"
>
    <div class="flex items-center gap-4 mb-6">
        <h3 class="text-2xl font-semibold text-slate-200">
            {{ category.title }}
        </h3>

        <div class="h-px flex-1 bg-slate-800"></div>
    </div>

        <div
            class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
            <div
                v-for="(skill, index) in category.skills"
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
                <!-- Glow -->
                <div
                    class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition"
                    :style="{ background: skill.color }"
                ></div>

                <!-- Icon -->
                <img
                    :src="skill.icon"
                    :alt="skill.name"
                    class="relative z-10 w-16 h-16 object-contain mx-auto mb-4"
                >

                <!-- Nombre -->
                <div
                    class="relative z-10 flex flex-col items-center text-center"
                >
                    <span class="text-slate-200 font-medium">
                        {{ skill.name }}
                    </span>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>