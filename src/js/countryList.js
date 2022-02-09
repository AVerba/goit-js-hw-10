import { countryListItem } from "./countryListItem";

export const countryList=(countries)=>{
    const list =countries.map(country=>countryListItem(country)).join('');
    console.log(list);
    return list;

}