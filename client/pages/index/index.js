// client/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '', // 搜索内容
    movieData: [] // 搜索结果
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

  searchInput: function(e) {
    this.setData({
      searchValue: e.detail.value
    })
  },

  search: function() {
    let name = this.data.searchValue;
    let self = this;
    wx.request({
      url: 'http://127.0.0.1:8099/api/resp',
      method: "POST", //指定请求方式，默认get
      data: { name: name },
      header: {
         //默认值'Content-Type': 'application/json'
        'content-type': 'application/x-www-form-urlencoded' //post
      },
      success: function (res) {
        console.log(res.data)
        self.setData({movieData: res.data.data})
      }
    });
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