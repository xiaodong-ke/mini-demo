// pages/demo12/demo12.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 1. 标签字符串 最常用的
    // html: '<div class="tb-toolbar-container" data-spm="toolbar"><span class="tab"><span class="tb-toolbar-iconfont tb-toolbar-icon-home-fill"></span><p class="text">首页</p></span><span class="tab"><span class="tb-toolbar-iconfont tb-toolbar-icon-cart"></span><p class="text">购物车</p></span><span class="tab"><span class="tb-toolbar-iconfont tb-toolbar-icon-orderlist"></span><p class="text">订单列表</p></span><span class="tab"><span class="tb-toolbar-iconfont tb-toolbar-icon-my"></span><p class="text">我的淘宝</p></span><span class="tab"><span class="tb-toolbar-iconfont tb-toolbar-icon-more"></span><p class="text">更多</p></span></div>'
    // 2. 对象数组
    html: [
      {
        // 1. div 标签 name属性来指定
        name: "div",
        // 2. 标签上有哪些属性
        attrs: {
          class: "my_div",
          style: "color: red;"
        },
        // 3. 子节点 children 要接收的数据类型 和 nodes 第二种渲染方式的数据类型一致
        children: [{
          name: "p",
          attrs: {},
          // 放文本
          children: [{
            type: "text",
            text: "hello"
          }]
        }]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})