document.getElementById("formNameTask").addEventListener("submit", addTask);

document.getElementById("sercehId").addEventListener("submit", searchId);

document.getElementById("deleteId").addEventListener("submit", deleteId );

function getAllTasks() {
  console.log("im here in html");
  axios
    .get("/task")
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log("in HTML Error");
      console.log(error);
    });
}

function addTask(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;

  axios
    .post("/task", { name })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function searchId(e) {
  e.preventDefault();
  const id = document.getElementById("serid").value;
  const url = `/task/${id}`;

  axios
    .get(url)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
    });

}

function deleteId(e) {
  e.preventDefault();
  const id = document.getElementById("delid").value;

  const url = `/del/${id}`;

  axios
    .delete(url)
    .then(function (response) {
      if(response.status == 200){
        console.log(response);
      }

    })
    .catch(function (err) {
      console.log(err);
    });

}
