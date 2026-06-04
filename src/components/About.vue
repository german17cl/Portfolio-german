<script setup>
import profileImage from '../assets/about/german.png'
</script>

<template>
    <section
        id="about"
        class="min-h-screen px-6 lg:px-16 py-24"
    >
        <h2 class="text-4xl font-bold mb-16">
            Sobre mí
        </h2>

        <div
            class="
                flex
                flex-col
                lg:flex-row
                items-center
                gap-12
                lg:gap-20
            "
        >
            <!-- FOTO -->
            <div
                class="
                    flex
                    justify-center
                    lg:w-1/3
                "
            >
            
                <div
                    class="
                        relative
                        rounded-full
                        p-2
                        bg-slate-900
                    "
                >
                    <img
                        :src="profileImage"
                        alt="Germán Campiño"
                        class="
                            w-64
                            h-64
                            lg:w-80
                            lg:h-80
                            rounded-full
                            object-cover
                            scale-105
                            hover:scale-110
                            transition-transform duration-300
                        "
                    >
                </div>
            </div>

            <!-- TEXTO -->
            <div
                class="
                    lg:w-2/3
                    text-slate-300
                    space-y-6
                    text-lg
                    leading-relaxed
                "
            >
                <p>
                    Soy Germán Campiño, técnico superior en
                    desarrollo de aplicaciones web (DAW), apasionado por la
                    creación de aplicaciones intuitivas y enfocadas
                    en ofrecer una buena experiencia de usuario.
                </p>

                <p>
                    Durante mi formación he trabajado tanto en frontend como
                    en backend, desarrollando proyectos escalables donde he aprendido las estructuras y buenas prácticas del desarrollo, 
                    siempre buscando escribir código limpio y sostenible.
                </p>

                <p>
                    Me gusta aprender constantemente, enfrentar nuevos retos
                    y seguir mejorando mis habilidades para aportar valor en
                    proyectos y equipos de desarrollo.
                </p>
            </div>
        </div>
    </section>
</template> 