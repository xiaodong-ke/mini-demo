// pages/demo16/demo16.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 0,
        name: "苹果",
        value: "apple"
      },
      {
        id: 1,
        name: "葡萄",
        value: "grape"
      },
      {
        id: 2,
        name: "香蕉",
        value: "bananer"
      }
    ],
    checkedList: []
  },
  // 复选框的选中事件
  handleItemChange(e) {
    // console.log(e);
    // 1. 获取被选中的复选框的值
    const checkedList = e.detail.value;
    // 2. 进行赋值
    this.setData({
      checkedList
    })
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