let items = document.getElementById("items");

function getAllMessages() {
  fetch("getContants")
    .then((response) => response.json())
    .then((data) => {
      showOnDom(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
getAllMessages();

function showOnDom(data) {
  for (let index = 0; index < data.length; index++) {
    if(index%2){
        items.innerHTML += `<div style="background-color: blanchedalmond;">
            <p>Name: ${data[index].name}</p>
            <p>Email: ${data[index].email}</p>
            <p>Message: ${data[index].message}</p>
            <hr>
            </div>
            <br>
            `;    
    }             
    else{
        items.innerHTML += `<div style="background-color:darkgrey">
            <p>Name: ${data[index].name}</p>
            <p>Email: ${data[index].email}</p>
            <p>Message: ${data[index].message}</p>
            <hr>
            </div>
            <br>
            `;    
    } 
}
}

function changeCarNum() {
  let num = document.getElementById("cartItems");
  num.style.color = "sandybrown";

  axios
    .get("/getCart/61903a03c4163ab1b03e925d")
    .then((response) => {
      num.innerText = response.data.proudcts.length;
    })
    .catch((err) => {
      console.log(err);
    });
}
changeCarNum();