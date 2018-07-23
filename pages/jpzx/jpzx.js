//jpzx.js



Page({
  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    dengjiData: ['1','2','3'],
    index: 0//选择的下拉列表下标
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