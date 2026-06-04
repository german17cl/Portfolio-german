<script setup>
import { Github, ExternalLink } from 'lucide-vue-next'

import javaIcon from '../assets/skills/java.png'
import phpIcon from '../assets/skills/php.png'
import vueIcon from '../assets/skills/vue.svg'
import tailwindIcon from '../assets/skills/tailwindcss.png'
import laravelIcon from '../assets/skills/laravel.png'
import mysqlIcon from '../assets/skills/mysql.png'
import cssIcon from '../assets/skills/css.png'
import xmlIcon from '../assets/skills/xml.png'
import xsltIcon from '../assets/skills/xslt.png'
import htmlIcon from '../assets/skills/html.png'
import ciberseguridadIcon from '../assets/skills/ciberseguridad.png'
import windowsIcon from '../assets/skills/windows.png'
import linuxIcon from '../assets/skills/linux.png'
import ubuntuIcon from '../assets/skills/ubuntu.png'
import dockerIcon from '../assets/skills/docker.png'
import javascriptIcon from '../assets/skills/javascript.png'

const projects = [
    

    {
        title: 'Centro Cívico Txurdínaga',
        description: 'Plataforma web desarrollada para modernizar la gestión de actividades del Centro Cívico de Txurdínaga, permitiendo inscripciones online, control de aforo, listas de espera y comunicación entre ciudadanos y administración mediante un sistema de incidencias y sugerencias.',
        image: '/src/assets/projects/txurdinaga.png',
        repo: 'https://github.com/2526-2DW3-TGE/G5-TGE',
        // tech: ['Vue 3', 'PHP', 'MySQL', 'TailwindCSS']
        tech: [
            { name: 'Vue', icon: vueIcon },
            { name: 'PHP', icon: phpIcon },
            { name: 'Laravel', icon: laravelIcon },
            { name: 'MySQL', icon: mysqlIcon },
            { name: 'Tailwind', icon: tailwindIcon },
            { name: 'JavaScript', icon: javascriptIcon },
            { name: 'Docker', icon: dockerIcon }

        ]
    },

    {
        title: 'ShopClub',
        description: 'Aplicación web de comercio electrónico enfocada en la gestión de productos, navegación por catálogo y carrito de compras, ofreciendo una experiencia intuitiva y responsive para el usuario.',
        image: '/src/assets/projects/shopclub.png',
        repo: 'https://github.com/german17cl/recursos-vue',
        // tech: ['Vue 3', 'TailwindCSS', 'JavaScript']
        tech: [
            { name: 'Vue', icon: vueIcon },
            { name: 'Tailwind', icon: tailwindIcon },
            { name: 'JavaScript', icon: javascriptIcon }
        ]
    },
    {
        title: 'EcoTxurdi',
        description: 'Proyecto tipo CTF educativo para fomentar el cuidado del medio ambiente.',
        image: '/src/assets/projects/ecotxurdi.png',
        repo: 'https://github.com/andressito99/EcoTxurdi',
        tech: [
            { name: 'PHP', icon: phpIcon },
            { name: 'JavaScript', icon: javascriptIcon },
            { name: 'MySQL', icon: mysqlIcon },
            { name: 'CSS', icon: cssIcon },
            { name: 'Ciberseguridad', icon: ciberseguridadIcon },
            { name: 'Windows Server', icon: windowsIcon },
            { name: 'Linux', icon: linuxIcon },
            { name: 'Ubuntu Server', icon: ubuntuIcon },
            { name: 'Docker', icon: dockerIcon }
        ]
    },
    {
        title: 'MusicWorld App',
        description: 'Aplicación en Java que gestiona elementos del mundo musical.',
        image: '/src/assets/projects/musicworld-app.png',
        repo: 'https://github.com/Dav-id15/musicWorld-App', 
        tech: [
            { name: 'Java', icon: javaIcon },
            { name: 'MySQL', icon: mysqlIcon },
            { name: 'XML', icon: xmlIcon },
            
        ]
    },
    {
        title: 'MusicWorld Website',
        description: 'Versión web del proyecto MusicWorld desarrollada en PHP.',
        image: '/src/assets/projects/musicworld-web.png',
        repo: 'https://github.com/Dav-id15/musicWorld-Website',
        tech: [
            { name: 'PHP', icon: phpIcon },
            { name: 'XSLT', icon: xsltIcon },
            { name: 'HTML', icon: htmlIcon },
            { name: 'CSS', icon: cssIcon }
        ]
    },
    
    {
        title: 'Sistema de Cine',
        description: 'Sistema de gestión de cine con control de películas y sesiones.',
        image: '/src/assets/projects/cine.png',
        repo: 'https://github.com/german17cl/recursos-vue',
        tech: [
            { name: 'PHP', icon: phpIcon },
            { name: 'Laravel', icon: laravelIcon },
            { name: 'Tailwind', icon: tailwindIcon },
            { name: 'MySQL', icon: mysqlIcon }
        ]
    }
    
    
]
</script>

<template>
    <section id="projects" class="min-h-screen px-6 lg:px-16 py-24">

        <!-- TITLE -->
        <h2 class="text-4xl font-bold mb-12">
            Proyectos
        </h2>

        <!-- GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div
                v-for="project in projects"
                :key="project.title"
                class="
                    group
                    rounded-2xl
                    overflow-hidden
                    border border-slate-800
                    bg-slate-900/40
                    backdrop-blur-md
                    hover:-translate-y-2
                    hover:border-slate-600
                    transition
                "
            >

                <!-- IMAGE -->
                <div class="h-48 overflow-hidden">
                    <img
                        :src="project.image"
                        class="
                            w-full h-full object-cover
                            group-hover:scale-105
                            transition duration-500
                        "
                    />
                </div>

                <!-- CONTENT -->
                <div class="p-6">

                    <div class="flex justify-between items-start">

                        <h3 class="text-xl font-semibold">
                            {{ project.title }}
                        </h3>

                        <!-- GITHUB ICON -->
                        <a
                            :href="project.repo"
                            target="_blank"
                            class="text-slate-400 hover:text-white transition"
                        >
                            <Github />
                        </a>

                    </div>

                    <p class="text-slate-400 mt-3 text-sm leading-relaxed">
                        {{ project.description }}
                    </p>

                    <!-- TECH -->
                    <div class="flex gap-3 mt-4">
                        <div
                            v-for="tech in project.tech"
                            :key="tech.name"
                            class="relative group/tech"
                        >
                            <img
                                :src="tech.icon"
                                :alt="tech.name"
                                class="
                                    w-8 h-8
                                    object-contain
                                    opacity-80
                                    hover:opacity-100
                                    hover:scale-110
                                    transition-all duration-300
                                "
                            >

                            <!-- Tooltip -->
                            <div
                                class="
                                    absolute
                                    -bottom-8
                                    left-1/2
                                    -translate-x-1/2
                                    px-2 py-1
                                    rounded
                                    text-xs
                                    whitespace-nowrap
                                    bg-black/80
                                    text-white

                                    opacity-0
                                    group-hover/tech:opacity-100

                                    transition
                                    pointer-events-none
                                "
                            >
                                {{ tech.name }}
                            </div>
                        </div>
                    </div>

                    <!-- BUTTON -->
                    <div class="mt-6 flex justify-end">
                        <a
                            :href="project.repo"
                            target="_blank"
                            class="
                                flex items-center gap-2
                                text-sm text-slate-300
                                hover:text-white
                                transition
                            "
                        >
                            Ver repositorio
                            <ExternalLink class="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>