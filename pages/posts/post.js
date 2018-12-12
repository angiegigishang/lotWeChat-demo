// pages/posts/post.js
var postsData = require('../../data/posts-data.js')

Page({

  data: {
   posts_key: postsData.postList
  },

  onPostTap: function(event) {
    var postId = event.currentTarget.dataset.postid;
    console.log(postId)
    wx.navigateTo({
      url: "posts-detail/posts-detail"
    })
  }
})