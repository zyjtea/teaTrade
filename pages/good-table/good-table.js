var gooddata = require('../../utils/goodinfo.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: []
  },
  onLoad: function(e) {
    this.setData({
      item: gooddata.goodinfo()
    })
    console.log(this.data.item)
  },
  detail(e) {
    console.log(e);
    let id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../goods/goods?id='+id
    })
  }
})