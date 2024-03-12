import { defineStore } from 'pinia'

const API_ROOT: string = 'http://127.0.0.1:8000/api';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: null,
        error: null,
        isLoading: false,
    }),
    actions:{
        async login(email:string, password:string): Promise<void>
        {
            try{
                this.isLoading = true
                const response = await fetch(`${API_ROOT}/login_check`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email, password}),
                });

                if(!response.ok){
                    throw new Error('Error al iniciar la sesión');
                }

                const data = await response.json();
                this.token = data.token
                this.error = data.error

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

