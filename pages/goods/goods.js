var gooddata = require('../../utils/goodinfo.js');
Page({
  data: {
    isLike: true,
    Ogoods: null,
    buyNumber: 0,
    // banner
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    // 商品详情介绍
    detailImg: [
      "http://www.tea26.com/file/upload/201701/03/200040322728.jpg"
    ],
    imgurl: null
  },
  onLoad: function(e) {
    // 获取上个页面传入的商品id并设置当前页面商品参数
    let i = parseInt(e.id);
    console.log(i);
    this.setData({
      Ogoods: gooddata.goodinfo()[i],
    })
    console.log(this.data.imgurl)
  },
  //预览图片
  previewImage: function(e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgurl // 需要预览的图片http链接列表  
    })
  },

  placeOrder: function(event) {
    var name = event.target.dataset.name;
    if (name == "order") {
      this.setData({
        actionType: 'payOrder'
      })
    } else if (name == "cart") {
      this.setData({
        actionType: 'addCart'
      })
    }
    if (this.data.showModalStatus) {
      this.hideModal();
    } else {
      this.showModal();
    }
  },

  showModal: function() {
    // 显示遮罩层  
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },

  hideModal: function() {
    // 隐藏遮罩层  
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  //取消
  click_cancel: function() {
    this.hideModal();
  },
  //确定
  btn_ok: function() {
    // 组合购物车数组
    let cartList = new Array();
    cartList.push(this.data.Ogoods, this.data.buyNumber);
    // 将购物车数组存入缓存
    wx.setStorage({
      key: 'cartList',
      data: cartList,
    })
    wx.showLoading({
      title: '成功添加至购物车',
    })
    // 隐藏loading, 隐藏Moodla
    setTimeout(() =>{
      wx.hideLoading();
      this.hideModal();
    }, 1000)

  },
  numJianTap: function() {
    this.data.buyNumber--;
    this.setData({
      buyNumber: this.data.buyNumber
    })
  },
  numJiaTap: function() {
    this.data.buyNumber++;
    this.setData({
      buyNumber: this.data.buyNumber
    })
  }
})