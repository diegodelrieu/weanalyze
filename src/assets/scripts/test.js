import * as $ from 'jquery';
const userCounter = document.querySelector("#startBox");

var proxyUrl = 'https://immense-caverns-57731.herokuapp.com/',
    targetUrl = "http://localhost:4000/api/v1/events"



export default (fetch(targetUrl)
  .then(response => response.json())
  .then((data) => {
    console.log(data.events.length)
    const totalUsers = data.events.length;
    console.log(totalUsers)
    userCounter.insertAdjacentHTML("afterbegin", totalUsers);
    })
);
