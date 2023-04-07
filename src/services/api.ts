import axios from "axios";

const catApiUrl = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
})

const dogApiUrl = axios.create({
    baseURL: 'https://api.thedogapi.com/v1',
})

const catConfig = {
    headers: {'x-api-key': '25220bbb-f80f-4efc-97a4-5e309c7790ab'},
}

const dogConfig = {
    headers: {'x-api-key': 'a07196cc-ac47-4af8-b225-9c607d885658'},
}

export const getCats = async() =>
    await catApiUrl.get('/breeds', catConfig);

export const getDogs = async() =>
    await dogApiUrl.get('/breeds', dogConfig);
