import * as $ from 'jquery';
const userCounter = document.querySelector("#totalPage");


var targetUrl = "http://haoshihui.wogengapp.cn/api/v1/events";

let totalPage = 0;

export default (fetch(targetUrl)
  .then(response => response.json())
  .then((data) => {
    totalPage = data.events.length;
    console.log(totalPage)
    userCounter.insertAdjacentHTML("afterbegin", totalPage);
  })
);
