


Page({
  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    dengjiData: ['1', '2', '3'],
    index: 0,//选择的下拉列表下标
    array: [{
      "image":"http://www.taopic.com/uploads/allimg/100610/66-1006101151380.jpg",
      "name":"商品名称",
      "image2": "/images/share.png",
      "youdian": "优点：***",
      "guige":"规格：***",
      "price":"价格：¥ ¥ ¥",
      "price2": "价格区间：¥ --¥ ",
      "biaoqian": "标签",
      "details": "详情"
      }, {
      "image": "http://www.taopic.com/uploads/allimg/100610/66-1006101151380.jpg",
        "name": "商品名称",
        "image2": "/images/share.png",
        "youdian": "优点：***",
        "guige": "规格：***",
        "price": "价格：¥ ¥ ¥",
        "price2": "价格区间：¥ --¥ ",
        "biaoqian": "标签",
        "details": "详情"
      }, {
        "image": "http://www.taopic.com/uploads/allimg/100610/66-1006101151380.jpg",
        "name": "商品名称",
        "image2": "/images/share.png",
        "youdian": "优点：***",
        "guige": "规格：***",
        "price": "价格：¥ ¥ ¥",
        "price2": "价格区间：¥ --¥ ",
        "biaoqian": "标签",
        "details": "详情"
    }]
  },
  // 点击下拉显示框
  dengjiTap() {
    console.log(this.setdata)
    this.setData({
      show: !this.data.show
    });
  },

  biaoqianTap() {
    console.log(this.data.show)
    this.setData({
      show: !this.data.show
    });
  },
  
})