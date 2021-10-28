const axios = require("axios");
const express = require("express");
const path = require("path"),
  app = express(),
  PORT = 8080,
  publicPath = path.join(__dirname, "..", "public");

// --- hbs stuff
const hbs = require("hbs");
(viewsPath = path.join(__dirname, "..", "templates", "views")),
  (partialsPath = path.join(__dirname, "..", "templates", "partials"));
app.set("view engine", "hbs");
// --- use non default name , here use templates directory
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// --- serve static html\css\js\image files
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  // --- serve index.hbs from views directory (templates in this case)
  res.render("index", { somekey: "haim", somekey2: "yakov" });
});

// **** mead_nath_weather_location_web_server_ajax ****
// app.get("/", (req, res) => {
//   // --- serve indexChallenge.hbs from views directory (templates in this case)
//   res.render("indexChallenge", { somekey: "haim", somekey2: "yakov" });
// });

app.get("/help", (req, res) => {
  // --- serve help.hbs from views directory (templates in this case)
  res.render("help");
});
app.get("/about", (req, res) => {
  // --- serve about.hbs from views directory (templates in this case)
  res.render("about");
});

app.get("/city", (req, res) => {
  // --- serve city.hbs from views directory (templates in this case)
  const API_KEY = `d6abf8802df77ac560227b518149b6d5`;
  const city = req.query.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  axios
    .get(url)
    .then(function (response) {
      if (response.status == 200) {
        // res.render("location", {
        //   name: `City: ${response.data.name}`,
        //   lat: `Latitude: ${response.data.coord.lat}`,
        //   lon: `Longitude: ${response.data.coord.lon}`,
        //   img: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
        //   description:`Description : ${response.data.weather[0].description}`
        // });
        res.send({
          name: `City: ${response.data.name}`,
          lat: `Latitude: ${response.data.coord.lat}`,
          lon: `Longitude: ${response.data.coord.lon}`,
          img: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
          description:`Description : ${response.data.weather[0].description}`
        });
      } else {
        throw `there was a problem`;
      }
    })
    .catch((err) => {
      res.render("error");
    });
});

// app.get("/cityChallenge", (req, res) => {
//   // --- serve city.hbs from views directory (templates in this case)
//   const API_KEY = `d6abf8802df77ac560227b518149b6d5`;
//   const city = req.query.city;
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

//   axios
//     .get(url)
//     .then(function (response) {
//       if (response.status == 200) {
//         res.render("indexChallenge", {
//           name: `City: ${response.data.name}`,
//           lat: `Latitude: ${response.data.coord.lat}`,
//           lon: `Longitude: ${response.data.coord.lon}`,
//           img: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
//           description:`Description : ${response.data.weather[0].description}`
//         });
//       } else {
//         throw `there was a problem`;
//       }
//     })
//     .catch((err) => {
//       res.render("error");
//     });
// });
// app.get("/error", (req, res) => {
//   // --- serve about.hbs from views directory (templates in this case)
//   res.render("error");
// });

app.listen(PORT, () => {
  console.log(`server listens on port : ${PORT}`);
});
