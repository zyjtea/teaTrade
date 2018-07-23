//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    addressList: []
  },

  selectTap: function(e) {

  },

  addAddess: function() {
    wx.redirectTo({
      url: "/pages/address-add/address-add"
    })
  },

  editAddess: function(e) {
    wx.redirectTo({
      url: "/pages/address-add/address-add?id=" + e.currentTarget.dataset.id
    })
  },

  // 页面加载
  onLoad: function() {
    wx.getStorage({
      key: 'addressList',
      success: res => {
        this.setData({
          addressList: res.data
        })
        console.log(this.data.addressList);
      },
    })
    // console.log(app.globalData.wxaddress);
    // if (app.globalData.wxaddress) {
    //   this.addressList = [{
    //     wxaddress: app.globalData.wxaddress
    //   }]
    //   console.log(this.addressList);
    // }

  },
  onShow: function() {
    this.initShippingAddress();
  },
  initShippingAddress: function() {

  }
})