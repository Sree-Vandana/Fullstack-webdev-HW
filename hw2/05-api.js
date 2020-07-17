// const url = 'https://restcountries.eu/rest/v2/all';

// // Enter your code here
// let country;
// fetch(url)
// .then(responce => responce.json())  /**we get Ok:true but the data is in body */
// .then(data => displayData(data))    /** returns a promise; in promise value we can see the results array.*/
// .catch(err => console.log("Error: ", err));

// function displayData(countryData){
//   let countryName ="";
//   let countryPopulation ="";
//   country = countryData;
//   console.log(country);
//   //console.log("length = ",country.results.length);
//   //console.log("len = ", country.count);
//   // 
//   //console.log(country[0].name);
//   console.log(country.length);
//   for(let i=0; i<country.length; i++){
//     //console.log("country= ", country[i].name);
//     countryName += `<li value="${country[i].name}">${country[i].name} - ${country[i].population}</li>`
//    // countryPopulation += `<li value="${country[i].population}">${country[i].population}</li>`
//   }
//  document.getElementById('results').innerHTML = countryName;
// }

let url = 'https://restcountries.eu/rest/v2/all';
let xhr = new XMLHttpRequest();
let countryInfo ="";
//let countryPop
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.send();
xhr.onload = () => {
if (xhr.status === 200) {
//console.log(xhr.response);
//countryInfo = xhr.response;
//console.log(xhr.response.length);
for(let i=0; i<xhr.response.length; i++){
      countryInfo += `<b><li value="${xhr.response[i].name}">${xhr.response[i].name} - ${numberWithCommas(xhr.response[i].population)}</li></b>`
    }
    document.getElementById('results').innerHTML = countryInfo;

}
else {
console.log(`Status Code: ${xhr.status} - ${xhr.statusText}`);
}
};
//console.log(numberWithCommas(12345645678978990));

function numberWithCommas(pop) {
  return pop.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
