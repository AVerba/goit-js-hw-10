import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

import { getCountriesAPI } from './js/api/countriesApi';


const DEBOUNCE_DELAY = 300;
// const data=getCountriesAPI('usa');


getCountriesAPI('usa').then(data=>{
    // const amount = data.length;
    const {length} =data;
 console.log(length)
});