// pages/orders/orders.js
Page({
  data: {
    address: {},
    hasAddress: false,
    total: 0,
    orders: [
      { id: 1, title: '极品普洱', image: '/image/puer.jpg', num: 1, price: 240.00 },
      { id: 2, title: '致臻极品茶', image: '/image/zhen.png', num: 5, price: 198.00 }
    ]
  },
  onLoad: function () {
    // wx.getStorage({
    //   key: 'cartsList',
    //   success: function(res) {
    //     this.setData({
    //       hasList: true,
    //       orders : res
    //     });
    //   },
    // })
  },

  onReady() {
    this.getTotalPrice();
  },

  onShow: function () {
    const self = this;
    wx.getStorage({
      key: 'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },
  



  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },
  toPay() {

    wx.switchTab({
      url: '/pages/home/home'
    })
  }
})