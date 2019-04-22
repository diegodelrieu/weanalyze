import * as $ from 'jquery';
const userCounter = document.querySelector("#uniqueVisitors");


var targetUrl = "http://haoshihui.wogengapp.cn/api/v1/users";

let totalPage = 0;

export default (fetch(targetUrl)
  .then(response => response.json())
  .then((data) => {
    totalPage = data.users.length;
    userCounter.insertAdjacentHTML("afterbegin", totalPage);
  })
);
