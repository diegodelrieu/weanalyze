import * as $ from 'jquery';
const userCounter = document.querySelector("#uniqueVisitors");


var targetUrl = "http://localhost:4000/api/v1/users";

let totalPage = 0;

export default (fetch(targetUrl)
  .then(response => response.json())
  .then((data) => {
    totalPage = data.users.length;
    userCounter.insertAdjacentHTML("afterbegin", totalPage);
  })
);
