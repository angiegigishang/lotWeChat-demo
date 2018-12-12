// pages/posts/post.js
var postsData = require('../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "Dec 13 2018",
    title: "5G频谱划分尘埃落定 智慧城市应用风云再起"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //服务器动态获取数据
     var post_content1 = {
       date: "Dec 13 2018",
       title: "5G频谱划分尘埃落定 智慧城市应用风云再起",
       img: {
         post_img: "/images/swiper1.jpg",
         author_img: "/images/logo.jpg"
       },      
       content: "工业和信息化部2018年12月10日发文表示，5G系统中低频段试验频率使用许可已经发放。下一步，工信部将积极指导各基础电信运营企业做好5G系统试验的基站部署，促进我国5G产业的健康快速发展...",     
     }
     this.setData(post_content1)
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