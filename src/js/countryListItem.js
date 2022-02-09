export const countryListItem=(country)=>{
    const {name, flags}=country;
    const {official}=name;
    const{svg}=flags;

    return `
            <li class="country-list__item">
                <img style="width: 40px;" class="country-list__img" src="${svg}" alt="${official}">
                <span class="country-list__name">${official}</span>
            </li>    
            `;
}

