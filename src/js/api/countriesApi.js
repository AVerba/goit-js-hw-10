import { apiService } from "./serviceApi";

const BASE_URL = 'https://restcountries.com/v3.1/name';

export const getShortCountriesAPI=(name)=>{
    return apiService(`${BASE_URL}/${name}?fields=name,capital,population,flags,languages`); 
} 


export const getLargeCountriesAPI=(name)=>{
    return apiService(`${BASE_URL}/${name}`);  
} 

