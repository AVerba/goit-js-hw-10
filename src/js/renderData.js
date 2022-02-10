import Notiflix from 'notiflix';

import { getShortCountriesAPI } from './api/countriesApi';
import { countryList } from './countryList';
import { countryView } from './countryView';
// import {  } from '';
// import {  } from '';
// import {  } from '';



export const renderData=(inputValue, ref)=>{
    const {countryListRef, countryInfoRef}=ref;
    if(!inputValue){
        Notiflix.Notify.failure('Oops...You are not enteren name of country');
        return;
    }

    getShortCountriesAPI(inputValue).then(data=>{     

        if (data.length > 10) {
            console.clear();
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            return;
          }

        if(data.length>1){
            console.log(data)
            countryListRef.innerHTML= countryList(data);
            return;
        }
        if(data.length===1){
        countryInfoRef.innerHTML= data.map(item=>countryView(item))
        }   
 
   
    }).catch(error=>{
        console.dir(error);
        Notiflix.Notify.failure('Oops, there is no country with that name');

    });


};