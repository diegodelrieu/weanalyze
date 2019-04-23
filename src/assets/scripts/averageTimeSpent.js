import * as $ from 'jquery';

var targetUrl = "http://haoshihui.wogengapp.cn/api/v1/events";
let totalTimeSpent = [];
let leavingPages = {};
let initSession = "";
let endSession = ""
let leavingPage = ""
let timeSpent = 0

export default (fetch(targetUrl)
  .then(response => response.json())
  .then((data) => {
    data.events.forEach((event) => {
      if (event.description === "Opened the app") {
        initSession = event;
        console.log(initSession)
      } if (event.description === "customerLeft" && event.user_open_id === initSession.user_open_id) {
        endSession = event;
        console.log(endSession)
        leavingPage = endSession.page;
        timeSpent = parseInt(endSession.timestamp) - parseInt(initSession.timestamp);
        console.log(`${timeSpent} is the timeSpent`)
        totalTimeSpent.push(timeSpent);
        if (leavingPages[leavingPage]){
          leavingPages[leavingPage] += 1
        } else {
          leavingPages[leavingPage] = 1
        }
      }
    })
    let averageTimeSpent = totalTimeSpent / totalTimeSpent.length
    console.log(leavingPages);
    console.log(totalTimeSpent)
  }))
