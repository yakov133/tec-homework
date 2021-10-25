const option = document.getElementById("option");
const city = document.getElementById("city");
const coordinates = document.getElementById("coordinates");
const userLocation = document.getElementById("location");
coordinates.style.display = "none";
userLocation.style.display = "none";

function submitForm(event) {
  event.preventDefault();
  switch (option.value) {
    case "city":
      coordinates.style.display = "none";
      userLocation.style.display = "none";
      city.style.display = "block";
      break;
    case "coordinates":
      coordinates.style.display = "block";
      city.style.display = "none";
      userLocation.style.display = "none";
      break;
    case "location":
      userLocation.style.display = "block";
      coordinates.style.display = "none";
      city.style.display = "none";
      break;
    default:
      console.log(`somthing went worng!!!`);
      break;
  }
}
