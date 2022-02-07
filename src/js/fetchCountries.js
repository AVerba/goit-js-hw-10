export const fetchCountries=(name)=>{

    return fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();

    })
    .then()
    .catch(()=>{
        console.log("Something gona wrong")
    })

}