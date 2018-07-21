//trade,js



Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532100043113&di=4efb29adfe25d40a3ae67674b273391e&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D3f8fc88ddb43ad4bb2234e83ea6b30da%2Fd01373f082025aaf42b34be3f1edab64034f1a10.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532100093003&di=4b6f8294a9f95ce3d059efc0bf2efc99&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D46d7eccc871001e95a311c4cd0671199%2F3801213fb80e7becb1fca6c4252eb9389b506bf5.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532100147478&di=f33339359634d760723a5bb0c9c45b83&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fadaf2edda3cc7cd961ec83e23201213fb90e91cc.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3500,
    duration: 400
  },
  changeIndicatorDots: function () {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function () {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function () {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function () {
    this.setData({
      duration: e.detail.value
    })
  },
  click:function(){
    wx.navigateTo({
      url: "/pages/jpzx/jpzx?id="
    })
  }
})