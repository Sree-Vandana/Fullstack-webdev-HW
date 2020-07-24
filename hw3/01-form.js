// Enter your code here
var express = require('express');
var app = express();
const port = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
  res.sendFile(__dirname + "/" + 'index.html');
});
console.log("index.html");

app.post('/submit', (req, res)=>{
  var newsletter = req.body.newsletter;
  var comments = req.body.Submityourmessage;
  if(comments.length==0){
    comments = "n/a";
  }
  if(newsletter == "newsletter"){
    newsletter = "Yes, I would like to sign up for the newsletter.";
  }
  else{
    newsletter = "No, Thank you.";
  }

  res.write("Name: " + req.body.name + "\n");
  res.write("Email: " + req.body.email + "\n");
  res.write("comments: " + comments + "\n");
  res.write("Newsletter: " + newsletter + "\n");
  res.end();
})

app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`);
})