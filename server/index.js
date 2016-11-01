const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser"); // parses HTTP request parameters into objects
const methodOverride = require("method-override");
const PORT = process.env.PORT || 8000; // default port 8000
var initialContactData = require("./contactData.js").slice(0);

// Enable ejs templates
app.set("view engine", "ejs");

// Enable CORS on all routes
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Use method override so we can do DELETE requests
// app.use(methodOverride('_method'))


app.delete("/api/contacts/:id", (req, res, next) => {
  const contactIndex = initialContactData.findIndex(function(contact) {
    return contact.id === parseInt(req.params.id);
  });
  initialContactData = [
    ...initialContactData.slice(0, contactIndex),
    ...initialContactData.slice(contactIndex + 1)
  ]
  res.end();
});

app.get("/api/contacts/:id", (req, res, next) => {
  const contact = initialContactData.find(function(contact) {
    return contact.id == req.params.id;
  });
  if(contact) {
    res.json(contact);
  } else {
    res.sendStatus(404);
  }
  next();
});

app.get("/api/contacts", (req, res, next) => {
  res.json(initialContactData);
  next();
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
