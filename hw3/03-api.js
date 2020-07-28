const http = require('http');
const port = 5000;
var axios = require('axios');

let url = 'https://restcountries.eu/rest/v2/all';
axios
.get(url)
.then(response => {
console.log('getting data from api');
})
.catch(error => {
console.log('Request failed', error);
});

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Welcome to REST Country API!');
    res.end();
  }

  else if (req.url === '/main') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    axios
    .get(url)
    .then(response => {
    for(i=0; i<249;i++){
        res.write(response.data[i].name +' - '+response.data[i].capital+'<br/>')
    }
    res.end();
    })
    .catch(error => {
    console.log('Request failed', error);
    });
  }
  
  else if (req.url === '/populous') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    axios
    .get(url)
    .then(response => {
    for(i=0; i<249;i++){
        if(response.data[i].population > 20000000)
        res.write(response.data[i].name +'  '+response.data[i].population+'<br/>');
    }
    res.end();
    })
    .catch(error => {
    console.log('Request failed', error);
    });
  }

  else if (req.url === '/regions') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    axios
    .get(url)
    .then(response => {
    let Africa = America = Asia = Europe = Oceania = 0;
    
    for(i=0; i<=249;i++){
        if(response.data[i].region === 'Africa'){
            Africa++;
        }
        if(response.data[i].region === 'Americas'){
            America++;
        }
        if(response.data[i].region === 'Asia'){
            Asia++;
        }
        if(response.data[i].region === 'Europe'){
            Europe++;
        }
        if(response.data[i].region === 'Oceania'){
            Oceania++;
        }

    }

    res.write('Africa- '+Africa+'\nAmerica- '+America+'\nAsia- '+Asia+'\nEurope- '+Europe+'\nOceania- '+Oceania);  
    res.end();
    })
    .catch(error => {
    console.log('Request failed', error);
    });
  }
  
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('404: Page not found error');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});