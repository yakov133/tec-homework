

console.log("this message will be in the broswer ");

document.getElementById("form").addEventListener("submit",getTheData);
const cityInput = document.getElementById("city");
const info = document.getElementById("info");

function getTheData(e){
    e.preventDefault()
    city = cityInput.value; 

    axios.get("/city", { params: { city } })
    .then(function(response){
        if (response.status == 200) {
            let result = response.data;
            info.innerHTML=`
            <p>${result.name}</p>
            <p>${result.lat}</p>
            <p>${result.lon}</p>
            <img src=${result.img}>
            <p>${result.description}</p>
            `
          } else {
            throw `there was a problem`;
          }
    })
    .catch((error)=>{
        res.send()
    })

   

    
}