<template>

    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div class="text-center mb-5">
            <img src="/images/logos/hyper.svg" alt="Image" height="50" class="mb-3" />
            <div class="text-900 text-3xl font-medium mb-3">Bienvenido</div>
            <span class="text-600 font-medium line-height-3">¿No tienes cuenta?</span>
            <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Crear cuenta</a>
        </div>

        <div>
            <label for="email1" class="block text-900 font-medium mb-2">Email</label>
            <InputText v-model="email" id="email1" type="text" placeholder="Correo electrónico" class="w-full mb-3" />

            <label for="password1" class="block text-900 font-medium mb-2">Contraseña</label>
            <InputText v-model='password' id="password1" type="password" placeholder="Contraseña" class="w-full mb-3" />

            <div class="flex align-items-center justify-content-between mb-6">
                <div class="flex align-items-center">
                    <Checkbox id="rememberme1" :binary="true" v-model="checked1" class="mr-2"></Checkbox>
                    <label for="rememberme1">Remember me</label>
                </div>
                <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">He olvidado mi contraseña</a>
            </div>

            <Button @click="login" label="Iniciar sesión" icon="pi pi-user" class="w-full"></Button>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'

const checked1 = true

const store = useAuthStore();

const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const login = async () => {

    console.log('El email es: ')
    console.log(email.value)

    try {
        await store.login(email.value, password.value)
        console.log(store.token)
    } catch (error) {
        console.error('Error al iniciar sesión:');
    }
}

</script>

<style scoped>

</style>
