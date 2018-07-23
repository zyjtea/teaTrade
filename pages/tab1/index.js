//index.js
//获取应用实例
const app = getApp()
var infoData = require('../../utils/info.js')

Page({
  data: {
    startDate:'2016',
    endDate:'',
    clsfyShow:false,
    goodsShow:false,
    clsfyData: ['1', '2', '3', '4','5','6','7','8'],
    goodsData: ['普洱茶', '抹茶'],
    clsfyIndex:0,
    goodsIndex:0,
    noticeData:[],
    newsData: [],
    pinzhong:'品&nbsp;&nbsp;&nbsp;&nbsp;种'
  },
  onLoad: function (options) {
    this.setData({
      noticeData:infoData.noticeData().list,
      newsData:infoData.newsData().list
    })
  },
  selectClsfyTap(){
    this.setData({
      clsfyShow:!this.data.clsfyShow
    })
  },
  selectGoodsTap(){
    this.setData({
      goodsShow:!this.data.goodsShow
    })
  },
  optionClsfyTap(e){
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    console.log(e)
    this.setData({
      clsfyIndex:Index,
      clsfyShow:!this.data.clsfyShow
    })
    
  },
  optionGoodsTap(e) {
    let Index = e.currentTarget.dataset.index;
    this.setData({
      goodsIndex: Index,
      goodsShow: !this.data.goodsShow
    })
    getApp().globalData.teaID=this.data.goodsIndex
    console.log(getApp().globalData.teaID)
  },
  bindStartDateChange:function (e) {
    console.log('StartPicker发送选择改变，携带值为', e.detail.value)
    getApp().globalData.yearID=e.detail.value-2016
    console.log(getApp().globalData.yearID)
    this.setData({
      startDate: e.detail.value
    })
  },
  bindEndDateChange: function (e) {
    console.log('EndPicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      endDate: e.detail.value
    })
  },
  toNoticeDetails(e){
    console.log(e)
    getApp().globalData.readNum.notice[e.currentTarget.dataset.id]++
    wx.navigateTo({
      url: '/pages/tab2/index?id=' + e.currentTarget.dataset.id+"&titleclass=notice",
    })
  },
  toNewsDetails(e){
    getApp().globalData.readNum.news[e.currentTarget.dataset.id]++
    wx.navigateTo({
      url: '/pages/tab2/index?id=' + e.currentTarget.dataset.id + "&titleclass=news",
    })
  },
  returnMenu(){
    wx.switchTab({
      url: '/pages/my_index/index'
    })
  },
  searchSubmit(){
    console.log("search")    
    wx.navigateTo({
      url: '/pages/show-data/data-show',
    })
  }
})
