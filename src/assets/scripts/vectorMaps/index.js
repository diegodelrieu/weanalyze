import * as $ from 'jquery';
import 'jvectormap';
import 'jvectormap/jquery-jvectormap.css';
import './jquery-jvectormap-world-mill.js';
import { debounce } from 'lodash';

const mapProvinces = {
  "Jiangsu":"CN-32",
  "Guizhou":"CN-52",
  "Yunnan":"CN-53",
  "Chongqing":"CN-50",
  "Sichuan":"CN-51",
  "Shanghai":"CN-31",
  "Xizang":"CN-54",
  "Zhejiang":"CN-33",
  "Inner Mongol":"CN-15",
  "Shanxi":"CN-14",
  "Fujian":"CN-",
  "Tianjin":"CN-12",
  "Hebei":"CN-13",
  "Beijing":"CN-11",
  "Anhui":"CN-34",
  "Jiangxi":"CN-36",
  "Shandong":"CN-37",
  "Henan":"CN-41",
  "Hunan":"CN-43",
  "Hubei":"CN-42",
  "Guangxi":"CN-45",
  "Guangdong":"CN-44",
  "Hainan":"CN-46",
  "Xinjiang":"CN-65",
  "Ningxia":"CN-64",
  "Qinghai":"CN-63",
  "Gansu":"CN-62",
  "Shaanxi":"CN-61",
  "Heilongjiang":"CN-23",
  "Jilin":"CN-22",
  "Liaoning":"CN-21"
}

export default (function () {
  const vectorMapInit = () => {
    if ($('#world-map-marker').length > 0) {
      // This is a hack, as the .empty() did not do the work
      $('#vmap').remove();

      // we recreate (after removing it) the container div, to reset all the data of the map
      $('#world-map-marker').append(`
        <div
        id="vmap"
        style="
        height: 490px;
        position: relative;
        overflow: hidden;
        background-color: transparent;
        "
        >
        </div>
        `);

      $('#vmap').vectorMap({
        map: 'cn_mill',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderOpacity: 0.25,
        borderWidth: 0,
        color: '#e6e6e6',
        regionStyle : {
          initial : {
            fill : '#e4ecef',
          },
        },

        markerStyle: {
          initial: {
            r: 7,
            'fill': '#fff',
            'fill-opacity':1,
            'stroke': '#000',
            'stroke-width' : 2,
            'stroke-opacity': 0.4,
          },
        },

        series: {
          regions: [{
            values: {
              "CN-32": 0,
              "CN-52": 0,
              "CN-53": 0,
              "CN-50": 0,
              "CN-51": 0,
              "CN-31": 0,
              "CN-54": 0,
              "CN-33": 0,
              "CN-15": 0,
              "CN-14": 0,
              "CN-": 0,
              "CN-12": 0,
              "CN-13": 0,
              "CN-11": 0,
              "CN-34": 0,
              "CN-36": 0,
              "CN-37": 0,
              "CN-41": 0,
              "CN-43": 0,
              "CN-42": 0,
              "CN-45": 0,
              "CN-44": 0,
              "CN-46": 0,
              "CN-65": 0,
              "CN-64": 0,
              "CN-63": 0,
              "CN-62": 0,
              "CN-61": 0,
              "CN-23": 0,
              "CN-22": 0,
              "CN-21": 0
            },
            scale: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
          }],
        },
        hoverOpacity: null,
        normalizeFunction: 'linear',
        zoomOnScroll: false,
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#c9dfaf',
        selectedRegions: [],
        enableZoom: false,
        hoverColor: '#fff',
      });
    }
  };

  vectorMapInit();
  $(window).resize(debounce(vectorMapInit, 150));
})();





