
export const apiService=(url, options)=>{

    return fetch(url,options).then(response=>{
        if(!response.ok){
            return response.json.then(error=>Promise.reject(error))
        }
         return response.json();
    });
}


