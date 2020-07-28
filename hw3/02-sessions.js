var express = require('express');
const session = require('express-session');
var app = express();
const port = 5000;

app.use(
  session({
    store: new session.MemoryStore(),
    secret: 'I love chocolate chip cookies!',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 86400000
    }
  })
);

app.get('/', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/plain' });
  req.session.example = [];
  req.session.example.push(decodeURIComponent(req.url));
  res.send(`Currently on route: ${decodeURIComponent(req.url)}\n\nWelcometo http://locahost:5000/`);
});

app.get('/:parameter', function(req, res) {
      res.status(200);
      res.set({ 'Content-Type': 'text/plain'});
      var urls = req.session.example.slice();
      console.log("1st--> ",urls);
      console.log("2nd--> ", decodeURIComponent(req.url));
      req.session.example.push(decodeURIComponent(req.url));
      res.send(`Currently on route: ${decodeURIComponent(req.url)}\n\nPreviously visited:\n  ${urls.join('\n  ')}`);
});


app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`);
})