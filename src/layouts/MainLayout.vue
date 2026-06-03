<template>
    <div class="min-h-screen flex bg-slate-950 text-white">

        <BackgroundBlobs />

        <Sidebar />

        <main
            class="flex-1 overflow-y-auto pt-16 lg:pt-0"
        >
            <slot />
        </main>

    </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import BackgroundBlobs from '../components/BackgroundBlobs.vue'
</script>