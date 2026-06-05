<script setup>
import { ref, onMounted } from 'vue'
import phpIcon from '../assets/skills/php.png' 
import laravelIcon from '../assets/skills/laravel.png'
import codeigniterIcon from '../assets/skills/codeigniter.png'
import nodejsIcon from '../assets/skills/nodejs.png'
import javaIcon from '../assets/skills/java.png'
import mysqlIcon from '../assets/skills/mysql.png'
import gitIcon from '../assets/skills/git.png'
import githubIcon from '../assets/skills/github.png'
import dockerIcon from '../assets/skills/docker.png'
import ciberseguridadIcon from '../assets/skills/ciberseguridad.png'
import windowsIcon from '../assets/skills/windows.png'
import linuxIcon from '../assets/skills/linux.png'
import ubuntuIcon from '../assets/skills/ubuntu.png'
import htmlIcon from '../assets/skills/html.png'
import cssIcon from '../assets/skills/css.png'
import javascriptIcon from '../assets/skills/javascript.png'
import vueIcon from '../assets/skills/vue.svg'
import viteIcon from '../assets/skills/vite.png'
import tailwindIcon from '../assets/skills/tailwindcss.png'
import xmlIcon from '../assets/skills/xml.png'
import xsltIcon from '../assets/skills/xslt.png'

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
            { name: 'HTML', color: '#f97316', icon: htmlIcon },
            { name: 'CSS', color: '#3b82f6', icon: cssIcon },
            { name: 'JavaScript', color: '#facc15', icon: javascriptIcon },
            { name: 'Vue', color: '#22c55e', icon: vueIcon },
            { name: 'Vite', color: '#a855f7', icon: viteIcon },
            { name: 'TailwindCSS', color: '#38bdf8', icon: tailwindIcon },
            { name: 'XML', color: '#f97316', icon: xmlIcon },
            { name: 'XSLT', color: '#ffffff', icon: xsltIcon }
        ]
    },

    {
        title: 'Backend',
        skills: [
            { name: 'PHP', color: '#6366f1', icon: phpIcon },
            { name: 'Laravel', color: '#ef4444', icon: laravelIcon },
            { name: 'CodeIgniter', color: 'orange', icon: codeigniterIcon },
            { name: 'Node.js', color: '#16a34a', icon: nodejsIcon },
            { name: 'Java', color: '#ef4444', icon: javaIcon },
            { name: 'MySQL', color: '#0ea5e9', icon: mysqlIcon },
            
        ]
    },

    {
        title: 'Herramientas',
        skills: [
            { name: 'Git', color: '#ef4444', icon: gitIcon },
            { name: 'GitHub', color: '#ffffff', icon: githubIcon },
            { name: 'Docker', color: '#2563eb', icon: dockerIcon },
            { name: 'Ciberseguridad', color: '#2563eb', icon: ciberseguridadIcon },
            { name: 'Windows Server', color: '#0ea5e9', icon: windowsIcon },
            { name: 'Linux', color: 'yellow', icon: linuxIcon },
            { name: 'Ubuntu Server', color: 'orange', icon: ubuntuIcon }
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