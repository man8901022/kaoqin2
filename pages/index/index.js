wx.cloud.init()
const db = wx.cloud.database()
const usersCollection = db.collection("users")

Page({
  
  onLoad: function (options) {
    //获取用户openid
    wx.cloud.callFunction({
      name:"getopenid",
      success(res) {

        console.log("获取成功", res)
       
        usersCollection.where({
          xm: "姜兆文"
        }).get().then(res=>{
          console.log("获取用户信息成功",res)
        })      

        },
      fail(res) {
        console.log("获取失败", res)
      }

    })
  },
  navigateToinfo:function(event){
    wx.navigateTo({
      url: '../info/info',
    })
  },
  getUserInfo:function(event){
    usersCollection.get().then(res => {
      console.log("获取用户信息成功", res)
    })

  },
  fail(res) {
    console.log("获取失败", res)
  }

  
 

})
