const ap = new APlayer({
    container: document.getElementById('aplayer'),   //播放器容器元素
    listFolded: false,                              //列表默认折叠
    listMaxHeight: 90,                              //列表最大高度
    //lrcType: 3,                                     //此为歌词格式，没有歌词可以直接删掉这一行
	mini: false,                                     //迷你模式
    autoplay: true,                                 //自动播放
    theme: '#FADFA3',                               //主题色
	loop: 'all',                                    //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'list',                                 //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto',                               //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7,                                   //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: false,                                    //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
	audio: [                                        //音频信息
        {
            name: '미안해야 하는거니 (有必要不好意思吗)',                               //音频名称
            artist: '애즈 원',                       //音频艺术家
            url: 'http://mobileoc.music.tc.qq.com/M500000oW4mX3AqDXY.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&fromtag=53&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD',                         //音频链接
            cover: 'http://y.gtimg.cn/music/photo_new/T002R800x800M000003x5xa32jA2DE.jpg',                     //音频封面
            lrc: 'http://lab.liumingye.cn/api/lrc/get/type/qq/mid/000JoF1Q0GWBM0/download/1/name/%EC%9D%91%EA%B8%89%EC%8B%A4%20(%E6%80%A5%E6%95%91%E5%AE%A4)%20-%20%EC%A0%95%EC%8A%B9%ED%99%98.lrc',                         //歌词
            theme: '#ebd0c2'                           //切换到此音频时的主题色，比上面的 theme 优先级高
        },
		{
            name: '행복하길 바래(希望你幸福)',
            artist: '임형주',
            url: 'https://avos-cloud-jej3f06miele.s3.amazonaws.com/808967f464c9a5ace342/%ED%96%89%EB%B3%B5%ED%95%98%EA%B8%B8%20%EB%B0%94%EB%9E%98%20%28%E5%B8%8C%E6%9C%9B%E4%BD%A0%E5%B9%B8%E7%A6%8F%29%20-%20%EC%9E%84%ED%98%95%EC%A3%BC.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000fvwBw4aRYLv.jpg?max_age=2592000',
            lrc: 'http://lab.liumingye.cn/api/lrc/get/type/qq/mid/000dtSva1Mzebi/download/1/name/%ED%96%89%EB%B3%B5%ED%95%98%EA%B8%B8%20%EB%B0%94%EB%9E%98%20(%E5%B8%8C%E6%9C%9B%E4%BD%A0%E5%B9%B8%E7%A6%8F)%20-%20%EC%9E%84%ED%98%95%EC%A3%BC.lrc',
            theme: '#46718b'
        },
		{
            name: '응급실 (急救室)',
            artist: '정승환',
            url: 'http://mobileoc.music.tc.qq.com/M500000AxSPm1dUAlM.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&fromtag=53&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD',
            cover: 'http://y.gtimg.cn/music/photo_new/T002R800x800M000003x5xa32jA2DE.jpg',
            lrc: 'http://lab.liumingye.cn/api/lrc/get/type/qq/mid/000JoF1Q0GWBM0/download/1/name/%EC%9D%91%EA%B8%89%EC%8B%A4%20(%E6%80%A5%E6%95%91%E5%AE%A4)%20-%20%EC%A0%95%EC%8A%B9%ED%99%98.lrc',
            theme: '#46718b'
        },
		{
            name: 'MyLove',
            artist: 'WestLife',
            url: 'https://avos-cloud-jej3f06miele.s3.amazonaws.com/bdde762c7c03bf7ef5db/My%20Love%20-%20Westlife.mp3',
            cover: 'http://y.gtimg.cn/music/photo_new/T002R800x800M0000044JjUp1GeIwf.jpg',
            lrc: 'http://lab.liumingye.cn/api/lrc/get/type/qq/mid/001cuorY1VFcP1/download/1/name/My%20Love%20-%20Westlife.lrc',
            theme: '#46718b'
        }
    ]
});