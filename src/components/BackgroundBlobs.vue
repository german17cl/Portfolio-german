<template>
    <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">

        <div
            class="blob blob-1"
            :style="{ background: colors.primary }"
        ></div>

        <div
            class="blob blob-2"
            :style="{ background: colors.secondary }"
        ></div>

        <div
            class="blob blob-3"
            :style="{ background: colors.accent }"
        ></div>

    </div>
</template>
<script setup>
defineProps({
    colors: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.blob {
    position: absolute;
    border-radius: 9999px;
    filter: blur(120px);
    opacity: 0.25;
}

.blob-1 {
    width: 400px;
    height: 400px;
    
    top: 10%;
    left: 5%;

    animation: float1 18s ease-in-out infinite;
}

.blob-2 {
    width: 500px;
    height: 500px;
    
    top: 50%;
    right: 5%;

    animation: float2 24s ease-in-out infinite;
}

.blob-3 {
    width: 350px;
    height: 350px;
    
    bottom: 5%;
    left: 30%;

    animation: float3 20s ease-in-out infinite;
}
@keyframes float1 {

    0%,100% {
        transform: translate(0,0) scale(1);
    }

    50% {
        transform: translate(180px,80px) scale(1.15);
    }
    0% {
        transform: translate(0, 0);
    }

    25% {
        transform: translate(120px, 60px);
    }

    50% {
        transform: translate(200px, -40px);
    }

    75% {
        transform: translate(80px, -120px);
    }

    100% {
        transform: translate(0, 0);
    }
}

@keyframes float2 {
    0%,100% {
        transform: translate(0,0);
    }

    50% {
        transform: translate(-250px, -150px);
    }
}

@keyframes float3 {
    0%,100% {
        transform: translate(0,0);
    }

    50% {
        transform: translate(150px, -200px);
    }
}
</style>