import * as $ from 'jquery';
import 'easy-pie-chart/dist/jquery.easypiechart.min.js';

const ratioCounter = document.querySelector("#genderRatio");

var targetUrl = "http://haoshihui.wogengapp.cn/api/v1/users";

let femaleCount = 0;
let maleCount = 0;

export default setTimeout((fetch(targetUrl)
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    data.users.forEach((user) => {
      if (user.gender === "2"){
        femaleCount += 1
      } else if (user.gender ==="1"){
        maleCount += 1
      }
    })
    console.log(maleCount);
    console.log(femaleCount);
    let genderRatio = ((femaleCount) / (femaleCount + maleCount)) * 100;
    genderRatio = `${genderRatio}`;
    console.log(genderRatio);
    ratioCounter.setAttribute("data-percent", genderRatio);
  })
), 3000);


