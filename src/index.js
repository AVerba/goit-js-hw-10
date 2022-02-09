import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

import { getShortCountriesAPI } from './js/api/countriesApi';
import { clearContent } from "./js/ClearContent";
import { countryList } from './js/CountryList';


const ref={
    inputRef: document.querySelector('#search-box'),
    countryListRef: document.querySelector('.country-list'),
    countryInfoRef: document.querySelector('.country-info'),
}

const DEBOUNCE_DELAY = 300;

const inputHandler=(e)=>{
    const inputValue=e.target.value.trim();
    clearContent(ref.countryListRef);

    getShortCountriesAPI(inputValue).then(data=>{

        if (data.length > 10) {
            console.clear();
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            return;
          }

        if(data.length>1){
            ref.countryListRef.innerHTML= countryList(data);
           
            // ref.countryListRef.insertAdjacentHTML('beforeend', CounrtyList(data));
            // console.clear();
            // data.forEach(item=>{
            //     const {name}=item;
            //     console.log(name.official);
            // })
            return;
        }
        if(data.length===1){
        console.log(data)
        console.clear();
        data.map(item=>{
            const {capital,name, population, languages,flags}=item;
            const {official}=name;
            const{svg}=flags;
            console.log(population.toLocaleString())

            console.dir(`${official}, ${capital}, ${population.toLocaleString()}, ${Object.values(languages).join(',')}, ${svg}`)
        })}
 
   
    }).catch(error=>{
        //  console.log(error);
         if (name !== '') {
             Notiflix.Notify.failure('Oops, there is no country with that name');
           }
    });
}


ref.inputRef.addEventListener('input',debounce(inputHandler,DEBOUNCE_DELAY))