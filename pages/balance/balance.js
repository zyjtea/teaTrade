//index.js
//获取应用实例
const app = getApp()
   app.balance=0.00;
Page({
  data: {
    balance:0
  },
  onLoad: function () {
    this.setData({
      balance: app.globalData.balance
    })
  }
})
