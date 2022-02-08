import { apiService } from "./serviceApi";

const BASE_URL = 'https://restcountries.com/v3.1/name';

export const getCountriesAPI=(name)=>{
    return apiService(`${BASE_URL}/${name}`);
} 