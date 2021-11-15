const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const PORT = 8080;
const { Navigator } = require("node-navigator");
const navigator = new Navigator();
//

app.use(express.static(path.join(__dirname, "public")));


app.get("/city", (req, res) => {
  const query = req.query;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query.city}&appid=d6abf8802df77ac560227b518149b6d5`;

  if (query.city) {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(`got Success fetching the Weather`);
        if (response.status == 200) {
          let weather = response.data;
          console.log(weather   );
          
          res.send(`
        <div style="text-align:center;margin-top: 20%;background-color:slategray;"> 
        <h1>${weather.name}</h1>
        <img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}.png">
        <h3>Description : ${weather.weather[0].description}</h3> 
        <h4>${(weather.main.temp - 273.15).toFixed(2)}&#8451</h4>
        <h4>Longitude : ${weather.coord.lon}</h4>
        <h4> Latitude :  ${weather.coord.lat}</h4>
        </div>
        <footer>
                <p>Author: yakov kassa<br>
                <a href="mailto:yakov133@walla.com">yakov133@walla.com</a></p>
            </footer>`);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(`got Error`);
        console.log(error);
        res.sendFile(path.join(__dirname, "public", "Error.html"));
      });
  } else {
    res.send(
      `<h1 style="text-align:center;margin-top: 20%;">Eror, input was empty</h1>`
    );
  }
});

app.get("/coordinates", (req, res) => {
  const query = req.query;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${query.lon}&appid=d6abf8802df77ac560227b518149b6d5`;
  if (query.lat & query.lon) {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(`got Success fetching the Weather`);
        console.log(`coordinates`);
        if (response.status == 200) {
          let weather = response.data;
          console.log(weather.name);
          console.log(url);
          res.send(`
          <div style="text-align:center;margin-top: 20%;background-color:slategray;"> 
          <h1>${weather.name}</h1>
          <img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}.png">
          <h4>Description : ${weather.weather[0].description}</h4> 
          <h4>${(weather.main.temp - 273.15).toFixed(2)}&#8451</h4>
          <h4>Longitude : ${weather.coord.lon}</h4>
          <h4> Latitude :  ${weather.coord.lat}</h4>
          </div>
          <footer>
                  <p>Author: yakov kassa<br>
                  <a href="mailto:yakov133@walla.com">yakov133@walla.com</a></p>
              </footer>`);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(`got Error`);
        console.log(error);
        res.sendFile(path.join(__dirname, "public", "Error.html"));
      });
  } else {
    res.send(
      `<h1 style="text-align:center;margin-top: 20%;">Eror, input was empty</h1>`
    );
  }
});

app.get("/location", (req, res) => {
  let lat, lon;
  navigator.geolocation.getCurrentPosition((success, error) => {
    if (error) {
      console.error(error);
      throw `your locatin Can't be reached!!.`;
    } else {
      lat = success.latitude;
      lon = success.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d6abf8802df77ac560227b518149b6d5`;
      if (lat & lon) {
        axios
          .get(url)
          .then(function (response) {
            // handle success
            console.log(`got Success fetching the Weather`);
            console.log(`location`);
            if (response.status == 200) {
              let weather = response.data;
              res.send(`
          <div style="text-align:center;margin-top: 20%;background-color:slategray;"> 
          <h1>${weather.name}</h1>
          <img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}.png">
          <h4>Description : ${weather.weather[0].description}</h4> 
          <h4>${(weather.main.temp - 273.15).toFixed(2)}&#8451</h4>
          <h4>Longitude : ${weather.coord.lon}</h4>
          <h4> Latitude :  ${weather.coord.lat}</h4>
          </div>
          <footer>
                  <p>Author: yakov kassa<br>
                  <a href="mailto:yakov133@walla.com">yakov133@walla.com</a></p>
              </footer>`);
            }
          })
          .catch(function (error) {
            // handle error
            console.log(`got Error`);
            console.log(error);
            res.sendFile(path.join(__dirname, "public", "Error.html"));
          });
      } else {
        res.send(
          `<h1 style="text-align:center;margin-top: 20%;">Eror, input was empty</h1>`
        );
      }
    }
  });
});

app.get("*", (req, res) => {
  res.send("page not exist!!!", 404);
});

app.listen(PORT, () => {
  console.log(`server start to listen on port ${PORT}`);
});
