import './sass/main.scss';
import debounce from 'lodash.debounce';

import { clearContent } from "./js/ClearContent";
import { renderData } from "./js/renderData";


const ref={
    inputRef: document.querySelector('#search-box'),
    countryListRef: document.querySelector('.country-list'),
    countryInfoRef: document.querySelector('.country-info'),
}

const DEBOUNCE_DELAY = 300;

const inputHandler=(e)=>{
    const inputValue=e.target.value.trim();
    clearContent(ref.countryListRef);
    clearContent(ref.countryInfoRef);
    renderData(inputValue,ref);
}

ref.inputRef.addEventListener('input',debounce(inputHandler,DEBOUNCE_DELAY))