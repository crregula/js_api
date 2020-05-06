function XMLHttpRequestClick() {
     let request = new XMLHttpRequest();
     request.open("GET", "https://jsonplaceholder.typicode.com/users");
     request.send();
     request.onload = () => {
          console.log(request);
          if (request.status === 200) {
               console.log(JSON.parse(request.response));
          } else {
               console.log(`error ${request.status} ${request.statusText}`);
          }
     };
}

function fetchClick() {
     fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
               return response.json();
          })
          .then((users) => {
               console.log(users);
          });
}

async function getUsers() {
     let response = await fetch("https://jsonplaceholder.typicode.com/users");
     let data = await response.json();
     return data;
}
getUsers().then((data) => console.log(data));

function axiosClick() {
     axios.get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
               console.log(response.data);
          })
          .catch((error) => console.error(error));
}

$(document).ready(function () {
     $.ajax({
          url: "https://jsonplaceholder.typicode.com/users",
          type: "GET",
          success: function (result) {
               console.log(result);
          },
          error: function (error) {
               console.log(error);
          },
     });
});

function jQueryClick() {
     $.ajax({
          url: "https://jsonplaceholder.typicode.com/users",
          type: "GET",
          success: function (result) {
               console.log(result);
          },
          error: function (error) {
               console.log(error);
          },
     });
}
