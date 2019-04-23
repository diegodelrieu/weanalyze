import * as $ from 'jquery';
import Chart from 'chart.js';
import { COLORS } from './constants/colors';


const todayDateTimestamp = new Date().getTime()
const todayDate = new Date(todayDateTimestamp)
const yy = todayDate.getFullYear()
const mm = todayDate.getMonth() + 1
const dd = todayDate.getDate()

var targetUrl = "https://haoshihui.wogengapp.cn/api/v1/events"

const hashes_bymonth_dailystats = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
}
const dailystats = {}

export default (fetch(targetUrl)
  .then(response => response.json())
  .then((data) => {
    data.events.forEach((event) => {

    let timestamp = event.timestamp
    let date = new Date(timestamp * 1000)

    let userDate = date.getDate()
    if (!dailystats[userDate]){
      dailystats[userDate] = 1
      } else if (dailystats[userDate] > 0 ){
        dailystats[userDate] = dailystats[userDate] + 1
      }
    let userMonth = date.getMonth()+1;
    hashes_bymonth_dailystats[userMonth] = dailystats

    })


  const thisMonthsData = hashes_bymonth_dailystats[mm]
 console.log(thisMonthsData)
  const todaysData = thisMonthsData[dd]
  console.log(todaysData)
  const prev1Data = thisMonthsData[dd - 1]

  const prev2Data = thisMonthsData[dd - 2]

  const prev3Data = thisMonthsData[dd - 3]

  const prev4Data = thisMonthsData[dd - 4]

  const prev5Data = thisMonthsData[dd - 5]

  const prev6Data = thisMonthsData[dd - 6]


  const lineChartBox = document.getElementById('line-chart');

  const lineCtx = lineChartBox.getContext('2d');
  lineChartBox.height = 80;
  new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: [`${mm}/${dd -6}`, `${mm}/${dd -5}`, `${mm}/${dd -4}`, `${mm}/${dd -3}`, `${mm}/${dd - 2}`, `${mm}/${dd -1}`, `${mm}/${dd}`],
        datasets: [{
          label                : 'User Interactions',
          backgroundColor      : 'rgba(237, 231, 246, 0.5)',
          borderColor          : COLORS['deep-purple-500'],
          pointBackgroundColor : COLORS['deep-purple-700'],
          borderWidth          : 2,
          data                 : [prev6Data, prev5Data, prev4Data, prev3Data, prev2Data, prev1Data, todaysData],
        }],
      },
    })



  }) //dont touch

)

