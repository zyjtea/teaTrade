import * as echarts from '../../ec-canvas/echarts';
var postData = require('../../datas/data-graph.js');

function initChart(canvas, width, height) {
  var year = getApp().globalData.yearID;
  var tea = getApp().globalData.teaID;
  var data = postData.postList[year][tea];
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var teabea = [1, 1, 1];
  var reabea2 = [2, 2, 2];
  var option = {
    grid:{
      left:20,
      right:20,
      bottom:15,
      top:40,
      containLabel:true
    },
    backgroundColor: "#fff",
    color: ["#91F2DE", "#67E0E3", "#FFDB5C"],
    title: {
      text: '价格'
    },
    legend: {
      data: ['茶饼', '茶砖', '茶柱']
    },
    xAxis: {
      data:
      ["老枝味", "石介", "隽永"]
    },
    yAxis: {},
    series: [{
      name: '茶饼',
      type: 'bar',
      data: [data.brandOne.priceBing, data.brandTwo.priceBing, data.brandThree.priceBing]
    },
    {
      name: '茶砖',
      type: 'bar',
      data: [data.brandOne.priceZhuan, data.brandTwo.priceZhuan, data.brandThree.priceZhuan]
    },
    {
      name: '茶柱',
      type: 'bar',
      data: [data.brandOne.priceZhu, data.brandTwo.priceZhu, data.brandThree.priceZhu]
    }]
  };
  chart.setOption(option);
  return chart;
}
function initChart1(canvas, width, height) {
  var year = getApp().globalData.yearID;
  var tea = getApp().globalData.teaID;
  var data = postData.postList[year][tea];
  const chart1 = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart1);

  var option = {
    title: {
      text: '销量'
    },
    backgroundColor: "#fff",
    color: ["#67E0E3", "#91F2DE", "#FFDB5C"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: [0, '60%'],
      data: [{
        value: data.brandOne.salesNum,
        name: '石介'
      }, {
        value: data.brandTwo.salesNum,
        name: '老枝味'
      }, {
        value: data.brandThree.salesNum,
        name: '隽永'
      }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }]
  };

  chart1.setOption(option);
  return chart1;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    items: [
      { name: 'price', value: '价格' },
      { name: 'sale-num', value: '销量', checked: 'true' },
    ],
    ec: {
      onInit: initChart
    },
    ec1: {
      onInit: initChart1
    },
    year:getApp().globalData.yearID+2016
  },
  dateChange: function (e) {
    this.setData({
      selectDate: e.detail.value
    });
    getApp().globalData.yearID = e.detail.value - 2016;

  },
  teaChange: function (e) {
    this.setData({
      index: e.detail.value
    });
    for (var i = 0; i < this.data.array.length; i++) {
      if (this.data.array[i] == e.detail.value) {
        getApp().globalData.teaID = i;
        break;
      }
    }
  },
  returnInfo() {
    wx.navigateBack({
      delta: 1
    })
  },
  onLoad(options){
    this.setData({
      year: getApp().globalData.yearID + 2016
    })
  }

})