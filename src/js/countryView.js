export const countryView=(data)=>{

    const {capital,name, population, languages,flags}=data;
    const {common, official}=name;
    const{svg}=flags;


    return `
    <div class="card">
    <div class="card__title">
        <img class="card__image" src="${svg}" alt="${official}" width="400">
        <p class="card__text">${common}</p>
    </div>
    <ul class="card-info">
      <li class="card-info__item">Capital: <span class="card-info__text">${capital}</span></li>
      <li class="card-info__item">Population: <span class="card-info__text">${population.toLocaleString()}</span></li>
      <li class="card-info__item">Languages: 
        <span class="card-info__text">${Object.values(languages).join(',')}</span>
      </li>
    </ul>
  </div>`;
}

