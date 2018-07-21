//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    addressList: []
  },

  selectTap: function(e) {
    // var id = e.currentTarget.dataset.id;
    wx.getStorage({
      key: 'userName',
      success: function (res) {
        console.log('res.data')
      }
    })
  },

  addAddess: function() {
    wx.navigateTo({
      url: "/pages/address-add/address-add"
    })
  },

  editAddess: function(e) {
    wx.navigateTo({
      url: "/pages/address-add/address-add?id=" + e.currentTarget.dataset.id
    })
  },

  onLoad: function() {
    console.log('onLoad')
  },
  onShow: function() {
    this.initShippingAddress();
  },
  initShippingAddress: function() {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/user/shipping-address/list',
      data: {
        token: wx.getStorage('token')
      },
      success: (res) => {
        if (res.data.code == 0) {
          that.setData({
            addressList: res.data.data
          });
        } else if (res.data.code == 700) {
          that.setData({
            addressList: null
          });
        }
      }
    })
  }

})