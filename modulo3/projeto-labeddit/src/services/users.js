import axios from "axios"
import { BASE_URL } from "../constant/urls"
import { nextFeed } from "../routers/coordinator"

export const login = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        nextFeed(navigate)
    })
    .catch((err) => {
        alert("Login Inválido!")
    })
  }
  

export const signUp = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        nextFeed(navigate)
    })
    .catch((err) => {
        alert("Cadastro Inválido!")
    })
  }
   