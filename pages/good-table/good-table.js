Page({

  /**
   * 页面的初始数据
   */
  data: {
    good: '茶叶1'

  },
  buy() {
     wx.navigateTo({
       url: '../goods/goods',
     })
  }
})