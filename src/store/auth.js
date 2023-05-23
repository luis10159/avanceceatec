import { defineStore } from "pinia";
const useAuth = defineStore("auth", {
  state: () => {
    return {
      token: null,
      baseURL: "https://pokeapi.co/api/v2",
      // de esa manera => baseURL: "http://127.0.0.1/api",
    };
  },
  actions: {
    async obtenerDatos() {
      const uri = `${this.baseURL}/pokemon`;
      const rawResponse = await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json",
        },
      });
      const response = await rawResponse.json();
      return response;
    },

    /* async registrar(name, email, password) {
      const uri = `${this.baseURL}/auth/register`;
      const rawResponse = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      const response = await rawResponse.json();
      if (response.status == false) {
        this.token = null;
        return false;
      } else {
        this.token = response.token;
        return true;
      }
    },
    async login(email, password) {
    const uri = `${this.baseURL}/note`;
    const rawResponse = await fetch(uri,{
    method: 'POST',
    headers: {
    "Content-Type": "Application/json",
         ' Accept': "Application/json",
    },
    body: JSON.stringify({
    'email': email,
    'password': password
    })

    })
     const response = await rawResponse.json();
    },
    async obtenerDatos() {
      const uri = `${this.baseURL}/note`;
      const rawResponse = await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          'Accept': "Application/json",
          'Authorization': `Bearer ${this.token}`,
        },
      });
       const response = await rawResponse.json();
       return response;
    },
    async crearDato() {
    const uri = `${this.baseURL}/note`;
    const rawResponse = await fetch(uri, {
    method: 'POST',
    headers: {
    "Content-Type": "Application/json",
          'Accept': "Application/json",
          'Authorization': `Bearer ${this.token}`,
    },
    body: JSON.stringify({
    'content': content
    })
    })
     const response = await rawResponse.json();
    } */
  },
});

export default useAuth;
