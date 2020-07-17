//const url = 'https://pokeapi.co/api/v2/pokemon/';
const url ='https://pokeapi.co/api/v2/pokemon?offset=0&limit=964'
let pokeName="";
fetch(url)
.then(response => {
console.log('Request successful', response);
return response.json();
})
.then(pokeData => {
    for(let i=0; i<pokeData.results.length; i++){
     str = pokeData.results[i].name;
     pName = str[0].toUpperCase()+str.slice(1);
    // console.log(str[0].toUpperCase()+str.slice(1));
     pokeName += `<span value="${pName}">${pName}</span>`
     if(i!=963){
       pokeName += " - "
     }
    }
    document.getElementById('results').innerHTML = pokeName;
})
.catch(error => {
console.log('Request failed', error)
});
