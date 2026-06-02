<template>
    <MainLayout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'

import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
</script>