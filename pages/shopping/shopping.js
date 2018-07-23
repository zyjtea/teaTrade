// pages/shopping/shopping.js
Page({
  data: {
    cartsList: [],               // 购物车列表
    hasList: false,          // 列表是否有数据
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: false,  // 全选状态，默认全选

  },
  onPullDownRefresh: function () {
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 1500)
    console.log('刷新成功!');
  },
  onLoad: function () {
    // wx.getStorage({
    //   key: 'cartsList',
    //   success: function(res) {
    //     this.setData({
    //       hasList: true,
    //       cartsList: res
    //     });
    //   },
    // })
  },
  onShow: function () {
    this.setData({
      hasList: true,
      cartsList: [
        { id: 3, title: '极品普洱', image: '/image/puer.jpg', num: 1, price: 250.00, guige: '25mg', grade: 'A', selected: false },
        { id: 2, title: '致臻极品茶', image: '/image/zhen.png', num: 5, price: 198.00, selected: false }
      ]
    });
    this.getTotalPrice();
  },
  /**
   * 当前商品选中事件
   */
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let cartsList = this.data.cartsList;
    const selected = cartsList[index].selected;
    cartsList[index].selected = !selected;
    this.setData({
      cartsList: cartsList
    });
    this.getTotalPrice();
  },

  /**
   * 删除购物车当前商品
   */
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let cartsList = this.data.cartsList;
    cartsList.splice(index, 1);
    this.setData({
      cartsList: cartsList
    });
    if (!carts.length) {
      this.setData({
        hasList: false
      });
    } else {
      this.getTotalPrice();
    }
  },

  /**
   * 购物车全选事件
   */
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let cartsList = this.data.cartsList;

    for (let i = 0; i < cartsList.length; i++) {
      cartsList[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      cartsList: cartsList
    });
    this.getTotalPrice();
  },

  /**
   * 绑定加数量事件
   */
  

  /**
   * 计算总价
   */
  getTotalPrice() {
    let cartsList = this.data.cartsList;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < cartsList.length; i++) {         // 循环列表得到每个数据
      if (cartsList[i].selected) {                     // 判断选中才会计算价格
        total += cartsList[i].num * cartsList[i].price;   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      cartsList: cartsList,
      totalPrice: total.toFixed(2)

    });

  }

})