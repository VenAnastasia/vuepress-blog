module.exports = {
  
  title: '云边拾鹄',
  
  description: '故事结局很美丽，过程曲折而已',
  
  head: [
    ['link', { rel: 'icon', href: '/23333.png' }],
  ],
  
  base: '/',
  
  markdown: {
    lineNumbers: true //行号
  },

  theme: 'yur', 

  locales: {
    '/': {
        lang: 'zh-CN', // 暂时只支持中文
    },
  },

  markdown: {
    lineNumbers: true, // 开启行号（关闭无呼吸灯特效）
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
    toc: { includeLevel: [2, 3] }, // 指定 [[toc]]
  },


  themeConfig: {

    //主题配置
    site: 'https://venanastasia.top',        // 站点地址
    logo: '/logo.png',         // 站点 Logo
    banner: '/home_banner.png',     // 首页封面，固定宽高比例：482x500
    bannerButtons: [                    // 首页按钮，type 默认：default，可选：primary dashed danger link
        {text: '阅读博文', link: '/posts/?page=1&pageSize=12', type: 'primary'},
        {text: '了解博主', link: '/about', type: 'default'},
    ],
    //notFound: '/404.jpg', // 404 页面背景图片

    //【分类】
    nav: [
        { text: '编程技术', link: '/program/' },
        { text: '生活兴趣', link: '/life/' },
        { text: '软件工具', link: '/tool/' },
        { text: '其它', link: '/other/' },
    ],

    //【时间线】页面
    timeline: true,

    //【关于我】页面
    about: {
        banner: '/about_banner.gif', // 封面图
        avatar: '/avatar.jpg',
        name: 'Anastasia',
        introduction: '故事结局很美丽，过程曲折而已',
    },

    //评论
    comment: 'valine',
        valine: {
            appId: 'lyCcOu0CGxulTB9RUr4MKY3R-gzGzoHsz',
            appKey: 'uxbOq1o5jvna7bjDJ06PAJee',
            placeholder: '在这里写下你的留言丨支持 MarkDown 语法',
            notify: false,
            verify: false,
            avatar: 'mp',
            pageSize: 8,
            recordIP: true,
        },


    //【友链】页面
    link: {
      banner: '/link_banner.gif', // 封面图
      blog: [
      {
        title: '云边拾鹄',                                                   // 站点名称
        subtitle: 'Stay hungry, stay foolish',                                            // 站点描述
        link: 'https://venanastasia.top/',                                       // 站点网址
        logo: '/avatar.jpg', // 头像或者 Logo
        color: '#67d5b5',                                                   // 主题色
      },
      {
        // 根据示例，继续添加
      },
      ],
    },

    //页脚
    author: 'Anastasia',                         // 博主名称
        authorLink: 'https://github.com/VenAnastasia/', // 博主名称跳转链接
        footer: [
            [ // 推荐资源
                //{
                //  title: 'Yur',                                        // 标题
                //   subtitle: 'VuePress 主题',                           // 描述
                //    link: 'https://github.com/VenAnastasia/vuepress-theme-yur', // 跳转链接
                //},
                {
                    title: '数据结构mooc',
                    subtitle: '保命要紧',
                    link: 'https://www.icourse163.org/course/WHU-1001539003',// 根据示例，继续添加
                },
            ],

            [ // 相关信息
                {
                    title: 'Github',                   // 标题
                    link: 'https://github.com/VenAnastasia/', // 跳转链接
                    type: 'github',                    // 图标，这里获取：https://vue.ant.design/components/icon-cn/
                    theme: 'filled',                   // 图标类型，可选：filled（实心）丨outlined（默认：描线）丨twoTone（双色）
                },
                {
                    title: '苏ICP备19072729号',
                    link: 'http://beian.miit.gov.cn/',
                    type: 'flag',
                    theme: 'filled',
                },
            ],

            [ // 其它
                {
                    title: '768727767@qq.com',       // 标题
                    link: 'mailto:768727767@qq.com', // 跳转链接
                    type: 'mail',                // 图标，这里获取：https://vue.ant.design/components/icon-cn/
                    theme: 'outlined',           // 图标类型，可选：filled（实心）丨outlined（默认：描线）丨twoTone（双色）
                },
                {
                    title: '768727767',
                    link: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=768727767',
                    type: 'qq',
                    theme: 'outlined',
                },
            ],
          ],
  
    //百度自动推送
    baiDuAuthPush: true,

    //百度统计
    //baiDuTongJi: 'token', // https://hm.baidu.com/hm.js?token

    //在线聊天
    //crisp: 'CRISP_WEBSITE_ID', // Crisp 分配的 ID
    //    daoVoice: 'app_id', // Crisp 分配的 app_id

    //打字特效（网站描述）
    ityped: {
            typeSpeed: 300,           // 正常速度
            backSpeed: 100,           // 反向速度
            startDelay: 300,          // 开始延迟（毫秒）
            backDelay: 300,           // 反向延迟（毫秒）
            loop: true,               // 循环
            showCursor: true,         // 显示指针
            placeholder: false,       // 占位
            disableBackTyping: false, // 禁用反向输入
            cursorChar: '丨',         // 指针字符
        },
    
    //打赏
    reward: [
            '/alipay.png',
            //'https://static.xmt.cn/acc7d3d02b0c4a35a3735268cbb2cce0.png',
        ],

    //乐动标签云
    piano: true,

    //定制标识牌
    nameplate: {
            width: '86px',  // 长度
            height: '36px', // 高度
            text: [         // css 属性
                {
                    fontSize: '20',
                    textAnchor: 'middle',
                    x: '50%',
                    y: '50%',
                    textTransform: 'uppercase',
                    fill: 'none',
                    stroke: '#3498db',
                    textShadow: '0 0 1px #3498db',
                    strokeWidth: '1px',
                    strokeDasharray: '90 310',
                    animate: {
                        attributeName: 'stroke-dashoffset',
                        begin: '-1.5s',
                        dur: '6s',
                        from: '0',
                        to: '-400',
                        repeatCount: 'indefinite',
                    },
                },
                {
                    fontSize: '20',
                    textAnchor: 'middle',
                    x: '50%',
                    y: '50%',
                    textTransform: 'uppercase',
                    fill: 'none',
                    stroke: '#f39c12',
                    textShadow: '0 0 1px #f39c12',
                    strokeWidth: '1px',
                    strokeDasharray: '90 310',
                    animate: {
                        attributeName: 'stroke-dashoffset',
                        begin: '-3s',
                        dur: '6s',
                        from: '0',
                        to: '-400',
                        repeatCount: 'indefinite',
                    },
                },
                {
                    fontSize: '20',
                    textAnchor: 'middle',
                    x: '50%',
                    y: '50%',
                    textTransform: 'uppercase',
                    fill: 'none',
                    stroke: '#e74c3c',
                    textShadow: '0 0 1px #e74c3c',
                    strokeWidth: '1px',
                    strokeDasharray: '90 310',
                    animate: {
                        attributeName: 'stroke-dashoffset',
                        begin: '-4.5s',
                        dur: '6s',
                        from: '0',
                        to: '-400',
                        repeatCount: 'indefinite',
                    },
                },
                {
                    fontSize: '20',
                    textAnchor: 'middle',
                    x: '50%',
                    y: '50%',
                    textTransform: 'uppercase',
                    fill: 'none',
                    stroke: '#9b59b6',
                    textShadow: '0 0 1px #9b59b6',
                    strokeWidth: '1px',
                    strokeDasharray: '90 310',
                    animate: {
                        attributeName: 'stroke-dashoffset',
                        begin: '-6s',
                        dur: '6s',
                        from: '0',
                        to: '-400',
                        repeatCount: 'indefinite',
                    },
                },
            ],
        },

    //落下帷幕
    curtain: {
            tip: 'Wait, wait ...',   // 提示语
            textShadow: '#e91e63', // 文字阴影颜色
        },

    //全局默认密码
    password: '123456', // 默认：52yur


  }
}
