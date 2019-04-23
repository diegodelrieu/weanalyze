//import * as am4core from "@amcharts/amcharts4/core";
//import * as am4charts from "@amcharts/amcharts4/charts";
import * as $ from 'jquery';


/* Chart code */
// Themes begin
// am4core.useTheme(am4themes_animated);
// Themes end

export default (function() {
  console.log("hey there i'm in am4charts")

  $(".chartdiv").am4core.create(".chartdiv", am4charts.SlicedChart);
  console.log("hey there i'm in am4charts")
  let chart = am4core.create(".chartdiv", am4charts.SlicedChart);
  chart.data = [{
    "name": "Stage #1",
    "value1": 600,
    "value2": 450
  }, {
    "name": "Stage #2",
    "value1": 300,
    "value2": 400
  }, {
    "name": "Stage #3",
    "value1": 200,
    "value2": 290
  }, {
    "name": "Stage #4",
    "value1": 180,
    "value2": 100
  }, {
    "name": "Stage #5",
    "value1": 50,
    "value2": 50
  }, {
    "name": "Stage #6",
    "value1": 20,
    "value2": 20
  }, {
    "name": "Stage #7",
    "value1": 10,
    "value2": 10
  }];
  let series1 = chart.series.push(new am4charts.FunnelSeries());
  series1.dataFields.value = "value2";
  series1.dataFields.category = "name";
  series1.labels.template.disabled = true;
});

