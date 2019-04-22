import * as $ from 'jquery';
const userCounter = document.querySelector("#startBox");


var targetUrl = "http://haoshihui.wogengapp.cn/api/v1/events";

let totalVisits = 0;

export default (fetch(targetUrl)
  .then(response => response.json())
  .then((data) => {
    data.events.forEach((event)=> {
      if (event.description === "newCustomer onLoad") {
        totalVisits = totalVisits + 1;
      }
    });
    userCounter.insertAdjacentHTML("afterbegin", totalVisits);
    })
);
