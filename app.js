const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/public`));

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

app.get("/", (req, res, next) => {
  res.render("components/home");
});

app.get("/about", (req, res, next) => {
  res.render("components/about");
});

app.get("/works", (req, res, next) => {
  res.render("components/works");
});

app.get("/photos", (req, res, next) => {
  res.render("components/photos");
});

const port = 3000;
app.listen(port, () => console.log(`Server running in: http://localhost:${port}/`));
