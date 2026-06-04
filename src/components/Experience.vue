<script setup>
import phpIcon from '../assets/skills/php.png'
import jsIcon from '../assets/skills/javascript.png'
import mysqlIcon from '../assets/skills/mysql.png'
import gitIcon from '../assets/skills/git.png'
import vueIcon from '../assets/skills/vue.svg'
import tailwindIcon from '../assets/skills/tailwindcss.png'
import CodeIgniterIcon from '../assets/skills/codeigniter.png'
import githubIcon from '../assets/skills/github.png'

const exelTech = [
    { name: 'PHP', icon: phpIcon },
    { name: 'CodeIgniter', icon: CodeIgniterIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'GitHub', icon: githubIcon }
]


</script>
<template>
    <section
        id="experience"
        class="min-h-screen px-6 lg:px-16 py-24"
    >
        <h2 class="text-4xl font-bold mb-4">
            Experiencia
        </h2>

        <p class="text-slate-400 max-w-2xl mb-12">
            Experiencia adquirida durante prácticas profesionales como desarrollador web.
        </p>

        <div class="space-y-8">

            <!-- EXEL -->
            <div
                class="
                    group
                    relative
                    p-8
                    rounded-2xl
                    border border-slate-800
                    bg-slate-900/40
                    backdrop-blur-md

                    hover:border-slate-600
                    hover:-translate-y-1

                    transition-all duration-300
                "
            >
                <div
                    class="
                        absolute inset-0
                        rounded-2xl
                        bg-blue-500/10
                        opacity-0
                        blur-xl
                        group-hover:opacity-100
                        transition
                    "
                ></div>

                <div class="relative z-10">

                    <div
                        class="
                            flex
                            flex-col
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                            gap-2
                        "
                    >
                        <h3 class="text-2xl font-semibold">
                            <a href="https://exeleventos.com/" target="_blank" rel="noopener noreferrer noreferrer" class="hover:underline">
                                EXEL EVENTOS SL
                            </a>
                        </h3>

                        <span class="text-slate-400">
                            3 meses · Prácticas | 2026
                        </span>
                    </div>

                    <p class="text-blue-400 mt-2">
                        Desarrollador Web
                    </p>

                    <p class="mt-6 text-slate-300 leading-relaxed">
                        Desarrollo y mantenimiento de aplicaciones y sitios web internos orientados a la gestión de eventos, especialmente centrados en la organización de bodas y la gestión de clientes.
                        Participación en la mejora de funcionalidades existentes, optimización de procesos internos y trabajo con bases de datos relacionales.
                        Uso del framework CodeIgniter para el desarrollo backend y adaptación de la interfaz para garantizar una experiencia completamente responsive en distintos dispositivos.
                    </p>

                    <div class="flex flex-wrap gap-3 mt-6">
                        <div class="flex gap-3 mt-6">
                            <div
                                    v-for="tech in exelTech"
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
                                        transition
                                    "
                                />

                                <!-- tooltip -->
                                <div
                                    class="
                                        absolute -bottom-8 left-1/2 -translate-x-1/2
                                        text-xs text-white bg-black/70 px-2 py-1 rounded
                                        opacity-0
                                        group-hover/tech:opacity-100
                                        transition
                                        whitespace-nowrap
                                        pointer-events-none
                                    "
                                >
                                    {{ tech.name }}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            

        </div>
    </section>
</template>

