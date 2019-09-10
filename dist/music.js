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
            name: '大鱼',                           //音频名称
            artist: '周深、郭沁',                       //音频艺术家
            url: '"http://lc-tguve1gk.cn-n1.lcfile.com/47b5548df9c80bba84f4/%E5%91%A8%E6%B7%B1%E3%80%81%E9%83%AD%E6%B2%81%20-%20%E5%A4%A7%E9%B1%BC%20%282017%E4%B8%AD%E5%9B%BD%E6%96%B0%E6%AD%8C%E5%A3%B0%E7%AC%AC%E4%BA%8C%E5%AD%A3%E7%AC%AC%E5%8D%81%E6%9C%9F%E7%8E%B0%E5%9C%BA%E4%BC%B4%E5%A5%8F%29.mp3',                         //音频链接
            cover: 'http://lc-tguve1gk.cn-n1.lcfile.com/a9fff99abbddc8757d4b/%E5%A4%A7%E9%B1%BC.jpg',                     //音频封面
            //lrc: 'lrc1.lrc',                         //歌词
            theme: '#ebd0c2'                         //切换到此音频时的主题色，比上面的 theme 优先级高
        },
		{
            name: 'Something just like this',
            artist: 'Alex Goot _ Madilyn Bailey',
            url: 'http://lc-tguve1gk.cn-n1.lcfile.com/f3bee3260fa207648d34/Alex%20Goot%20_%20Madilyn%20Bailey%20-%20Something%20Just%20Like%20This.mp3',
            cover: 'http://lc-tguve1gk.cn-n1.lcfile.com/d21b8e3392433807b1e2/Something%20just%20like%20this.jpg',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
    ]
});