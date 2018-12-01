// app.js
App({
    onLaunch: function () {
        //var that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            // wx.login({
            //     success: function () {
            //         wx.getUserInfo({
            //             success: function (res) {
            //                 //console.info(res);
            //                 that.globalData.userInfo = res.userInfo;
            //                 typeof cb == "function" && cb(that.globalData.userInfo)
            //             }
            //         })
            //     }
            // });
        }

    },
    onHide: function () {
        wx.pauseBackgroundAudio();
    },
    onShow: function () {
        wx.playBackgroundAudio()
    },
    globalData: {
        userInfo: null,
      appid: 'wxb838f0f66e2c5ecd',//此处改成您自己的小程序appid
        server: 'https://zstbing.com/api.php',
        music_url: ''
    }
});

