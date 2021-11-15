const productName = document.getElementById("name");
const price = document.getElementById("price");
const category = document.getElementById("category");
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");

const form = document.getElementById("form");

form.addEventListener("submit", afterSubmitAction);

function afterSubmitAction(event) {
  event.preventDefault();

  let obj = {
    name: productName.value,
    category: category.value,
    price: price.value,
    pic: [pic1.value, pic2.value],
  };

  axios
    .post("/insretProduct", obj)
    .then((response) => {
      const pop = document.getElementById("pop");
      if ((response.statusText = "Created")) {
        pop.innerHTML = `<h2 style="color:blue;text-align:center;margin-bottom: 2%;">Product Successfully Added !!!</h2>`;
        setTimeout(() => {
          pop.innerHTML = "";
          productName.value="";
          price.value="";
          category.value="";
          pic1.value="";
          pic2.value="";

        }, 3000);
      } 
    })
    .catch((error) => {
      console.log(error);
    });
}


function changeCarNum() {
  let num = document.getElementById("cartItems");
  num.style.color = "pink";

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