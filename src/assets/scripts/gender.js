import * as $ from 'jquery';
const ratioGender = document.querySelector("#RatioGenderBox");
// not yet in index.html

var targetUrl = "https://haoshihui.wogengapp.cn/api/v1/users"



export default (fetch(targetUrl)
  .then(response => response.json())
  .then((data) => {
    console.log(data.users)
    const all = data.users.count
    const  male = data.users.filter(function(x){return x=="1"}).length
    const male_percent = (male/all * 100)
    ratioGender.setAttribute('data-percent', male_percent)
    })
);

