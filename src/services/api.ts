import axios from "axios";

export const catApi = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
})

export const dogApi = axios.create({
    baseURL: 'https://api.thedogapi.com/v1',
})
