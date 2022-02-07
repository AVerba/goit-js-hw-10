import './css/styles.css';
import Notiflix from 'notiflix';
import throttle from 'lodash.throttle';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;
