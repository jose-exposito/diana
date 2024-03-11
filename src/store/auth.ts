import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: null,
        error: null,
        isLoading: false
    }),
    actions:{
        async login(username, password){
            try{
                this.isLoading = true
                const response = await fetch('URL DE LA API/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({username, password}),
                });

                if(!response.ok){
                    throw new Error('Error al iniciar la sesión');
                }

                const data = await response.json();
                this.token = data.token
                this.error = null

            }catch(error: any){
                this.error = error.message
            }finally {
                this.isLoading = false
            }
        },

        logout(){
            this.token = null
        }

    },
})

