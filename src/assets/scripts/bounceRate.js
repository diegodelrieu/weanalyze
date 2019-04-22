import * as $ from 'jquery';
const userCounter = document.querySelector("#bounceRate");


var targetUrl = "http://haoshihui.wogengapp.cn/api/v1/events";

let customerOnLoad = 0;
let customerLogin = 0;
let bounceRate = 0;

export default (fetch(targetUrl)
  .then(response => response.json())
  .then((data) => {
    data.events.forEach((event)=> {
    if (event.description === "newCustomer onLoad") {
      customerOnLoad = customerOnLoad + 1;
    } else if (event.description === "newCustomer") {
      customerLogin = customerLogin + 1;
    }
  });
    bounceRate = 100 - ((customerLogin * 100) / customerOnLoad);
    console.log(bounceRate)
    userCounter.insertAdjacentHTML("afterbegin", `${bounceRate}%`);
  })
);
