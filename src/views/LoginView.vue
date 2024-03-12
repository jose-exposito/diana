<template>
<!--    <div class="align-items-center flex justify-content-center lg:px-8 md:px-6 px-4 py-8 surface-ground ng-star-inserted">-->

<!--        <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">-->
<!--            <div class="text-center mb-5">-->
<!--                <img src="../assets/images/logos/hyper.svg" alt="Image" height="50" class="mb-3" />-->
<!--                <div class="text-900 text-3xl font-medium mb-3">Bienvenido</div>-->
<!--                <span class="text-600 font-medium line-height-3">¿No tienes cuenta?</span>-->
<!--                <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Crear cuenta</a>-->
<!--            </div>-->

<!--            <div>-->

<!--                <label for="email1" class="block text-900 font-medium mb-2">Email</label>-->
<!--                <InputText v-model="email" id="email1" type="text" placeholder="Correo electrónico" class="w-full mb-3"-->
<!--                           :invalid="store.error !== null"/>-->

<!--                <label for="password1" class="block text-900 font-medium mb-2">Contraseña</label>-->
<!--                <InputText v-model='password' id="password1" type="password" placeholder="Contraseña" class="w-full mb-3" />-->

<!--                <div class="flex align-items-center justify-content-between mb-6">-->
<!--                    <div class="flex align-items-center">-->
<!--                        <Checkbox id="rememberme1" :binary="true" v-model="checked1" class="mr-2"></Checkbox>-->
<!--                        <label for="rememberme1">Remember me</label>-->
<!--                    </div>-->
<!--                    <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">He olvidado mi contraseña</a>-->
<!--                </div>-->

<!--                <Button @click="login" label="Iniciar sesión" icon="pi pi-user" class="w-full"></Button>-->
<!--            </div>-->
<!--        </div>-->

<!--    </div>-->

    <div class="block-content">
        <div class="ng-star-inserted">
            <div class="px-4 py-8 md:px-6 lg:px-8" style="background: url('../assets/images/signin/signin-2.jpg') no-repeat; background-size: cover;">
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-6 p-4 lg:p-7" style="background-color: rgba(255,255,255,.7);">
                        <img class="mb-6" src="../assets/images/logos/hyper.svg" alt="Image" height="50"/>
                        <div class="text-xl text-900 font-500 mb-3"> Wellcome to bastion </div>
                        <p clas="text-600 line-height-3 mt-0 mb-6">Quis vel eros donec ac odio tempor orci dapibus. In hac habitasse platea dictumst quisque.</p>
                        <ul class="list-none p-0 m-0">
                            <li class="flex align-items-start mb-4">
                                <div>
                                    <span class="flex align-items-center justify-content-center bg-purple-400" style="width: 38px; height: 38px; border-radius: 10px;">
                                        <i class="text-xl text-white pi pi-inbox"> <!-- falta el ::before --> </i>
                                    </span>
                                </div>
                                <div class="ml-3">
                                    <span class="font-medium text-900"> Unlimited Inbox </span>
                                    <p class="mt-2 mb-0 text-600 line-height-3"> Tincidunt nunc pulvinar sapien et. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra.  </p>
                                </div>
                            </li>

                            <li class="flex align-items-start mb-4">
                                <div>
                                    <span class="flex align-items-center justify-content-center bg-purple-400" style="width: 38px; height: 38px; border-radius: 10px;">
                                        <i class="text-xl text-white pi pi-shield"> <!-- falta el ::before --> </i>
                                    </span>
                                </div>
                                <div class="ml-3">
                                    <span class="font-medium text-900"> Premium Security </span>
                                    <p class="mt-2 mb-0 text-600 line-height-3"> Scelerisque purus semper eget duis at tellus at urna. Sed risus pretium quam vulputate.  </p>
                                </div>
                            </li>

                            <li class="flex align-items-start mb-4">
                                <div>
                                    <span class="flex align-items-center justify-content-center bg-purple-400" style="width: 38px; height: 38px; border-radius: 10px;">
                                        <i class="text-xl text-white pi pi-globe"> <!-- falta el ::before --> </i>
                                    </span>
                                </div>
                                <div class="ml-3">
                                    <span class="font-medium text-900"> Cloud Backups Inbox </span>
                                    <p class="mt-2 mb-0 text-600 line-height-3"> Egestas sed tempus urna et. Auctor elit sed vulputate mi sit amet mauris commodo.  </p>
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div class="w-full lg:w-6 p-4 lg:p-7 surface-card">

                        <div class="text-900 text-2xl font-medium mb-6">
                            Login
                        </div>
                        <label class="block text-900 font-medium mb-2" for="email3"> Email </label>
                        <input id="email3" class="p-inputtext p-component p-element w-full mb-4" type="text" placeholder="Email address" pinputtext=""/>

                        <label class="block text-900 font-medium mb-2" for="password3"> Password </label>
                        <input id="password3" class="p-inputtext p-component p-element w-full mb-4"> type="password" placeholder="Password" pinputtext=""/>

                        <div class="flex align-items-center justify-content-between mb-6">
                            <div class="flex align-items-center">
                                <p-checkbox id="rememberme3" class="p-element" styleclass="mr-2"></p-checkbox>
                                <label for="rememberm3"> Remember me </label>
                            </div>
                            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"> Forgot Password? </a>
                        </div>

                        <button class="p-element p-ripple w-full p-button p-component" pbutton="" pripple="" label="Login" icon="pi pi-user">
                            <span class="p-button-icon p-button-icon-left pi pi-user" aria-hidden="true"></span>
                            <span class="p-button-label"> Login </span>
                            <span class="p-ink"></span>
                        </button>

                        <p-divider class="p-element" align="center" styleclas="my-6">
                            <div class="my-6 p-divider p-component p-divider-horizontal p-divider-solid p-divider-center" role="separator"></div>
                        </p-divider>

                        <div class="mt-6 text-center text-600">
                            Don't have an account?
                            <a class="font-medium text-blue-500" tabindex="0"> Sing up </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth'

const checked1 = true

const store = useAuthStore();
const router = useRouter()

const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const login = async () => {

    console.log('El email es: ')
    console.log(email.value)

    try {
        await store.login(email.value, password.value)
        console.log(store.token)
        await router.push({name: 'DashboardView'});
    } catch (error) {
        console.error('Error al iniciar sesión:');
    }
}

</script>

<style scoped>

</style>
