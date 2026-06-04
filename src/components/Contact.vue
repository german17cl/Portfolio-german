<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
    name: '',
    email: '',
    message: ''
})

const isLoading = ref(false)
const isSuccess = ref(false)
const isError = ref(false)

const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('success') // success | error 

const sendEmail = async () => {
    isLoading.value = true
    showToast.value = false

    try {
        await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
            from_name: form.value.name,
            email: form.value.email,
            message: form.value.message
        },
        {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
        )

        form.value = { name: '', email: '', message: '' }

        toastMessage.value = 'Mensaje enviado correctamente ✓'
        toastType.value = 'success'
        showToast.value = true

    } catch (error) {
        toastMessage.value = 'Error al enviar el mensaje'
        toastType.value = 'error'
        showToast.value = true

    } finally {
        isLoading.value = false

        setTimeout(() => {
        showToast.value = false
        }, 3000)
    }
    }
</script>

<template>
    <section id="contact" class="min-h-screen px-6 lg:px-16 py-24">
        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-4 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0 translate-y-2"
            >
            <div
                v-if="showToast"
                class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg backdrop-blur-md border"
                :class="toastType === 'success'
                ? 'bg-green-500/20 border-green-400 text-green-300'
                : 'bg-red-500/20 border-red-400 text-red-300'"
            >
                <span class="font-medium">
                {{ toastMessage }}
                </span>
            </div>
        </Transition>
        <h2 class="text-4xl font-bold mb-4">
            Contacto
        </h2>

        <p class="text-slate-400 max-w-2xl mb-12">
            ¿Tienes una propuesta, proyecto o simplemente quieres
            ponerte en contacto conmigo? Estaré encantado de hablar contigo.
        </p>

        <div class="grid lg:grid-cols-2 gap-12 items-start">

            <!-- INFO -->
            <div class="space-y-6">
                <div>
                    <h3 class="font-semibold text-lg">Correo</h3>
                    <p class="text-slate-400">germancamp17@gmail.com</p>
                </div>

                <div>
                    <h3 class="font-semibold text-lg">Ubicación</h3>
                    <p class="text-slate-400">Bilbao, España</p>
                </div>
            </div>

            <!-- FORM -->
            <form @submit.prevent="sendEmail"
                class="p-8 rounded-2xl border flex flex-col border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-6">

                <input v-model="form.name" type="text" placeholder="Nombre"
                    class="w-full p-3 rounded-lg bg-slate-900 border border-slate-700" required />

                <input v-model="form.email" type="email" placeholder="Correo electrónico"
                    class="w-full p-3 rounded-lg bg-slate-900 border border-slate-700" required />

                <textarea v-model="form.message" rows="6" placeholder="Tu mensaje..."
                    class="w-full p-3 rounded-lg bg-slate-900 border border-slate-700" required></textarea>
                <!-- Centrar el boton  -->
                
                <button type="submit" :disabled="isLoading"
                    class="px-6 flex justify-center align-middle py-3 rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-500  transition disabled:opacity-50">
                    {{ isLoading ? 'Enviando...' : 'Enviar mensaje' }}
                </button>

                <!-- FEEDBACK -->
                <p v-if="isSuccess" class="text-green-400 text-sm">
                    Mensaje enviado correctamente 🚀
                </p>

                <p v-if="isError" class="text-red-400 text-sm">
                    Error al enviar el mensaje
                </p>

            </form>

        </div>
        
    </section>
</template>