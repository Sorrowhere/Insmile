$(function () {
    var dataSource = {
        'beijing': [
            {
                area: '中国华北总部',
                shopName: '北京总店',
                name: '龚浩',
                image: '../img/contact/beijing/gonghao/1.jpg',
                moreImages: [
                    '../img/contact/beijing/gonghao/2.jpg',
                ],
            },
            {
                area: '',
                shopName: '国锐金嵿店',
                name: '孙程程',
                image: '../img/contact/beijing/sunchengcheng/1.jpg',
                moreImages: [
                    '../img/contact/beijing/sunchengcheng/2.jpg',
                    '../img/contact/beijing/sunchengcheng/3.jpg',
                    '../img/contact/beijing/sunchengcheng/4.jpg',
                    '../img/contact/beijing/sunchengcheng/5.jpg',
                    '../img/contact/beijing/sunchengcheng/6.jpg',
                    '../img/contact/beijing/sunchengcheng/7.jpg',
                    '../img/contact/beijing/sunchengcheng/8.jpg',
                    '../img/contact/beijing/sunchengcheng/9.jpg',
                ],
            },
            {
                shopName: '中关村店',
                name: '刘祯',
                image: '../img/contact/beijing/liuzhen/1.jpg',
                moreImages: [
                    '../img/contact/beijing/liuzhen/2.jpg',
                    '../img/contact/beijing/liuzhen/3.jpg',
                    '../img/contact/beijing/liuzhen/4.jpg',
                    '../img/contact/beijing/liuzhen/5.jpg',
                ],
            },
            {
                shopName: '中关村店',
                name: '张蕾',
                image: '../img/contact/beijing/zhanglei/1.jpg',
                moreImages: [
                    '../img/contact/beijing/zhanglei/2.jpg',
                ],
            },
            {
                shopName: '万科城市之光店',
                name: '张兰兰',
                image: '../img/contact/beijing/zhanglanlan/1.jpg',
                moreImages: ['../img/contact/beijing/zhanglanlan/2.jpg'],
            },
            {
                shopName: '阳光上东店',
                name: '宋姗姗',
                image: '../img/contact/beijing/songshanshan/1.jpg',
                moreImages: [
                    '../img/contact/beijing/songshanshan/2.jpg',
                    '../img/contact/beijing/songshanshan/3.jpg',
                    '../img/contact/beijing/songshanshan/4.jpg',
                    '../img/contact/beijing/songshanshan/5.jpg',
                    '../img/contact/beijing/songshanshan/6.jpg',
                ],
            },
        ],
        'shanghai': [
            {
                shopName: '青浦卓越世纪中心店',
                name: '吉丽雯',
                image: '../img/contact/shanghai/jiliwen/1.jpg',
                moreImages: [],
            },
            {
                shopName: '尚光徐汇店',
                name: '戴凌',
                image: '../img/contact/shanghai/dailing/1.jpg',
                moreImages: [
                    '../img/contact/shanghai/dailing/2.jpg',
                    '../img/contact/shanghai/dailing/3.jpg',
                    '../img/contact/shanghai/dailing/4.jpg',
                    '../img/contact/shanghai/dailing/5.jpg',
                    '../img/contact/shanghai/dailing/6.jpg',
                    '../img/contact/shanghai/dailing/7.jpg',
                    '../img/contact/shanghai/dailing/8.jpg',
                    '../img/contact/shanghai/dailing/9.jpg',
                    '../img/contact/shanghai/dailing/10.jpg',
                    '../img/contact/shanghai/dailing/11.jpg',
                    '../img/contact/shanghai/dailing/12.jpg',
                    '../img/contact/shanghai/dailing/13.jpg',
                    '../img/contact/shanghai/dailing/14.jpg',
                    '../img/contact/shanghai/dailing/15.jpg',
                ],
            },
            {
                shopName: '黄浦区瑞金二路店',
                name: '孙梦鸽',
                image: '../img/contact/shanghai/sunmengge/1.jpg',
                moreImages: [
                    '../img/contact/shanghai/sunmengge/2.jpg',
                    '../img/contact/shanghai/sunmengge/3.jpg',
                    '../img/contact/shanghai/sunmengge/4.jpg',
                    '../img/contact/shanghai/sunmengge/5.jpg',
                    '../img/contact/shanghai/sunmengge/6.jpg',
                    '../img/contact/shanghai/sunmengge/7.jpg',
                    '../img/contact/shanghai/sunmengge/8.jpg',
                    '../img/contact/shanghai/sunmengge/9.jpg',
                ],
            },
            {
                shopName: '七宝万科国际店',
                name: '郁金婷',
                image: '../img/contact/shanghai/yujingting/1.jpg',
                moreImages: [
                    '../img/contact/shanghai/yujingting/2.jpg',
                    '../img/contact/shanghai/yujingting/3.jpg',
                    '../img/contact/shanghai/yujingting/4.jpg',
                ],
            },
            {
                shopName: '杨浦区新江湾城店',
                name: '雪宁',
                image: '../img/contact/shanghai/xuening/1.jpg',
                moreImages: [
                    '../img/contact/shanghai/xuening/2.jpg',
                    '../img/contact/shanghai/xuening/3.jpg',
                    '../img/contact/shanghai/xuening/4.jpg',
                    '../img/contact/shanghai/xuening/5.jpg',
                    '../img/contact/shanghai/xuening/6.jpg',
                ],
            },
        ],
        'shenzhen': [
            {
                shopName: '深圳中心店',
                name: '陈希桐',
                image: '../img/contact/shenzhen/chenxitong/1.jpg',
                moreImages: [
                    '../img/contact/shenzhen/chenxitong/2.jpg',
                    '../img/contact/shenzhen/chenxitong/3.jpg',
                    '../img/contact/shenzhen/chenxitong/4.jpg',
                    '../img/contact/shenzhen/chenxitong/5.jpg',
                ],
            },
            {
                shopName: '深圳宝安店',
                name: '蔡春晓',
                image: '../img/contact/shenzhen/caichunxiao/1.jpg',
                moreImages: [
                    '../img/contact/shenzhen/caichunxiao/2.jpg',
                ],
            },
            {
                shopName: '龙岗区单店',
                name: '李嘉玲',
                image: '../img/contact/shenzhen/lijialing/1.jpg',
                moreImages: [],
            },
            {
                shopName: '华强店',
                name: '刘少霞',
                image: '../img/contact/shenzhen/liushaoxia/1.jpg',
                moreImages: [
                    '../img/contact/shenzhen/liushaoxia/2.jpg',
                    '../img/contact/shenzhen/liushaoxia/3.jpg',
                    '../img/contact/shenzhen/liushaoxia/4.jpg',
                ],
            },
            {
                shopName: '华强店',
                name: '姚少琼',
                image: '../img/contact/shenzhen/yaoshaoqiong/1.jpg',
                moreImages: [],
            },
            {
                shopName: '龙华新区店',
                name: '黄瑶',
                image: '../img/contact/shenzhen/huangyao/1.jpg',
                moreImages: [
                    '../img/contact/shenzhen/huangyao/2.jpg',
                    '../img/contact/shenzhen/huangyao/3.jpg',
                    '../img/contact/shenzhen/huangyao/4.jpg',
                    '../img/contact/shenzhen/huangyao/5.jpg',
                    '../img/contact/shenzhen/huangyao/6.jpg',
                ],
            },
        ],
        'jinan': [
            {
                shopName: '高新汉裕金谷旗舰店',
                name: '王路遥',
                image: '../img/contact/jinan/wangluyao/1.jpg',
                moreImages: [
                    '../img/contact/jinan/wangluyao/2.jpg',
                    '../img/contact/jinan/wangluyao/3.jpg',
                    '../img/contact/jinan/wangluyao/4.jpg',
                    '../img/contact/jinan/wangluyao/5.jpg',
                    '../img/contact/jinan/wangluyao/6.jpg',
                    '../img/contact/jinan/wangluyao/7.jpg',
                    '../img/contact/jinan/wangluyao/8.jpg',
                    '../img/contact/jinan/wangluyao/9.jpg',
                    '../img/contact/jinan/wangluyao/10.jpg',
                    '../img/contact/jinan/wangluyao/11.jpg',
                    '../img/contact/jinan/wangluyao/12.jpg',
                    '../img/contact/jinan/wangluyao/13.jpg',
                    '../img/contact/jinan/wangluyao/14.jpg',
                ],
            },
            {
                shopName: '名郡商务港店',
                name: '王路遥&曹瑾',
                image: '../img/contact/jinan/caojing/1.jpg',
                moreImages: [
                    '../img/contact/jinan/caojing/2.jpg',
                    '../img/contact/jinan/caojing/3.jpg',
                    '../img/contact/jinan/caojing/4.jpg',
                    '../img/contact/jinan/caojing/5.jpg',
                    '../img/contact/jinan/caojing/6.jpg',
                    '../img/contact/jinan/caojing/7.jpg',
                ],
            },
            {
                shopName: '槐荫区连城国际店',
                name: '祝凡雯',
                image: '../img/contact/jinan/zhufanwen/1.jpg',
                moreImages: [
                    '../img/contact/jinan/zhufanwen/2.jpg',
                    '../img/contact/jinan/zhufanwen/3.jpg',
                    '../img/contact/jinan/zhufanwen/4.jpg',
                    '../img/contact/jinan/zhufanwen/5.jpg',
                    '../img/contact/jinan/zhufanwen/6.jpg',
                ],
            },
            {
                shopName: '市中区领秀城店',
                name: '陈琳',
                image: '../img/contact/jinan/chenlin/1.jpg',
                moreImages: [
                    '../img/contact/jinan/chenlin/2.jpg',
                    '../img/contact/jinan/chenlin/3.jpg',
                    '../img/contact/jinan/chenlin/4.jpg',
                    '../img/contact/jinan/chenlin/5.jpg',
                    '../img/contact/jinan/chenlin/6.jpg',
                ],
            },
        ],
        'nanjing': [
            {
                shopName: '雨花区紫荆国际店',
                name: '林超',
                image: '../img/contact/nanjing/linchao/1.jpg',
                moreImages: [
                    '../img/contact/nanjing/linchao/2.jpg',
                    '../img/contact/nanjing/linchao/3.jpg',
                ],
            },
        ],
        'chengdu': [
            {
                shopName: '高新店',
                name: '刘咏静',
                image: '../img/contact/chengdu/liuyongjing/1.jpg',
                moreImages: [
                    '../img/contact/chengdu/liuyongjing/2.jpg',
                    '../img/contact/chengdu/liuyongjing/3.jpg',
                    '../img/contact/chengdu/liuyongjing/4.jpg',
                    '../img/contact/chengdu/liuyongjing/5.jpg',
                    '../img/contact/chengdu/liuyongjing/6.jpg',
                    '../img/contact/chengdu/liuyongjing/7.jpg',
                    '../img/contact/chengdu/liuyongjing/8.jpg',
                    '../img/contact/chengdu/liuyongjing/9.jpg',
                    '../img/contact/chengdu/liuyongjing/10.jpg',
                ],
            },
            {
                shopName: '高新店',
                name: '徐小傑',
                image: '../img/contact/chengdu/xuxiaojie/1.jpg',
                moreImages: [],
            },
            {
                shopName: '高新店',
                name: '杨雪帆',
                image: '../img/contact/chengdu/yangxuefan/1.jpg',
                moreImages: [
                    '../img/contact/chengdu/yangxuefan/2.jpg',
                    '../img/contact/chengdu/yangxuefan/3.jpg',
                    '../img/contact/chengdu/yangxuefan/4.jpg',
                ],

            },
            {
                shopName: '华宇广场店',
                name: '廖琦',
                image: '../img/contact/chengdu/liaoqi/1.jpg',
                moreImages: [
                    '../img/contact/chengdu/liaoqi/2.jpg',
                    '../img/contact/chengdu/liaoqi/3.jpg',
                ],

            },
        ],
        'xian': [
            {
                shopName: '金域国际店',
                name: '崔瑾',
                image: '../img/contact/xian/cuijing/1.jpg',
                moreImages: [
                    '../img/contact/xian/cuijing/2.jpg',
                    '../img/contact/xian/cuijing/3.jpg',
                    '../img/contact/xian/cuijing/4.jpg',
                    '../img/contact/xian/cuijing/5.jpg',
                    '../img/contact/xian/cuijing/6.jpg',
                ],
            },
        ],
        'ningbo': [
            {
                shopName: '余姚店',
                name: '丁丁',
                image: '../img/contact/ningbo/dingding/1.jpg',
                moreImages: [
                    '../img/contact/ningbo/dingding/2.jpg',
                    '../img/contact/ningbo/dingding/3.jpg',
                    '../img/contact/ningbo/dingding/4.jpg',
                    '../img/contact/ningbo/dingding/5.jpg',
                ],
            },
        ],
        'dalian': [
            {
                shopName: '金普新区店',
                name: '顾文静',
                image: '../img/contact/dalian/guwenjing/1.jpg',
                moreImages: [
                    '../img/contact/dalian/guwenjing/2.jpg',
                    '../img/contact/dalian/guwenjing/3.jpg',
                    '../img/contact/dalian/guwenjing/4.jpg',
                    '../img/contact/dalian/guwenjing/5.jpg',
                ],
            },
        ],
        'suzhou': [
            {
                shopName: '华旭大厦店',
                name: '沈滔',
                image: '../img/contact/suzhou/shentao/1.jpg',
                moreImages: [
                    '../img/contact/suzhou/shentao/2.jpg',
                    '../img/contact/suzhou/shentao/3.jpg',
                    '../img/contact/suzhou/shentao/4.jpg',
                    '../img/contact/suzhou/shentao/5.jpg',
                    '../img/contact/suzhou/shentao/6.jpg',
                ],
            },
            {
                shopName: '华旭大厦店',
                name: '李雯雯',
                image: '../img/contact/suzhou/liwenwen/1.jpg',
                moreImages: [
                    '../img/contact/suzhou/liwenwen/2.jpg',
                    '../img/contact/suzhou/liwenwen/3.jpg',
                ],
            },
        ],
        'dezhou': [
            {
                shopName: '德城区店',
                name: '秦硕蔓',
                image: '../img/contact/dezhou/qinshuoman/1.jpg',
                moreImages: [
                    '../img/contact/dezhou/qinshuoman/2.jpg',
                    '../img/contact/dezhou/qinshuoman/3.jpg',
                    '../img/contact/dezhou/qinshuoman/4.jpg',
                ],
            },
        ],
        'tangshan': [
            {
                shopName: '唐山店',
                name: '侯欣宇',
                image: '../img/contact/tangshan/houxinyu/1.jpg',
                moreImages: [
                    '../img/contact/tangshan/houxinyu/2.jpg',
                    '../img/contact/tangshan/houxinyu/3.jpg',
                    '../img/contact/tangshan/houxinyu/4.jpg',
                    '../img/contact/tangshan/houxinyu/5.jpg',
                ],
            },
            {
                shopName: '唐山店',
                name: '张旭',
                image: '../img/contact/tangshan/zhangxu/1.jpg',
                moreImages: [
                    '../img/contact/tangshan/zhangxu/2.jpg',
                ],
            },
        ],
        'zhengzhou': [
            {
                shopName: '万达中心店',
                name: '小媛',
                image: '../img/contact/zhengzhou/xiaoyuan/1.jpg',
                moreImages: [
                    '../img/contact/zhengzhou/xiaoyuan/2.jpg',
                    '../img/contact/zhengzhou/xiaoyuan/3.jpg',
                    '../img/contact/zhengzhou/xiaoyuan/4.jpg',
                    '../img/contact/zhengzhou/xiaoyuan/5.jpg',
                ],
            },
            {
                shopName: '万达中心店',
                name: '小萌',
                image: '../img/contact/zhengzhou/xiaomeng/1.jpg',
                moreImages: [],
            },
        ],
        'yanan': [
            {
                shopName: '延安店',
                name: '小媛',
                image: '../img/contact/yanan/xiaoyuan/1.jpg',
                moreImages: [
                    '../img/contact/yanan/xiaoyuan/2.jpg',
                    '../img/contact/yanan/xiaoyuan/3.jpg',
                    '../img/contact/yanan/xiaoyuan/4.jpg',
                    '../img/contact/yanan/xiaoyuan/5.jpg',
                ],
            },
            {
                shopName: '延安店',
                name: '小萌',
                image: '../img/contact/yanan/xiaomeng/1.jpg',
                moreImages: [],
            },
        ],
        'zunyi': [
            {
                shopName: '桐梓店',
                name: '陈晓洁',
                image: '../img/contact/zunyi/chenxiaojie/1.jpg',
                moreImages: [],
            },
        ],
        'jieyang': [
            {
                shopName: '普宁御景城店',
                name: '陈希桐',
                image: '../img/contact/jieyang/chenxitong/1.jpg',
                moreImages: [
                    '../img/contact/jieyang/chenxitong/2.jpg',
                    '../img/contact/jieyang/chenxitong/3.jpg',
                    '../img/contact/jieyang/chenxitong/4.jpg',
                ],
            },
        ],
        'qingdao': [
            {
                shopName: '青岛中心店',
                name: '杨文心',
                image: '../img/contact/qingdao/yangwenxin/1.jpg',
                moreImages: [
                    '../img/contact/qingdao/yangwenxin/2.jpg',
                    '../img/contact/qingdao/yangwenxin/3.jpg',
                    '../img/contact/qingdao/yangwenxin/4.jpg',
                ],
            },
        ],
        'zibo': [
            {
                shopName: '宏程国际广场店',
                name: '赵慧',
                image: '../img/contact/zibo/zhaohui/1.jpg',
                moreImages: [
                    '../img/contact/zibo/zhaohui/2.jpg',
                    '../img/contact/zibo/zhaohui/3.jpg',
                ],
            },
        ],
    };

// 获取内容
    var currentCity = 'beijing'
    var currentData = dataSource[currentCity];
    var compiled = _.template($('#tpl').html());
    var str = compiled({data: currentData});
    $('.js-node').html(str);

// 切换城市
    var $filterWrapper = $('.js-filter');
    $filterWrapper.on('click', 'a', function () {
        currentCity = $(this).attr('data-id');
        currentData = dataSource[currentCity];
        compiled = _.template($('#tpl').html());
        str = compiled({data: currentData});
        $('.js-node').html(str);
    });

// 查看更多
    $(document).on('click', '.js-more', function () {
        var moreImagesCompiled = '';
        var moreImagesCompiledStr = ''
        var index = $(this).attr('data-index');
        var curentPerson = currentData[index];


        if (curentPerson.moreImages && curentPerson.moreImages.length > 0) {
            moreImagesCompiled = _.template($('#tpl1').html());
            moreImagesCompiledStr = moreImagesCompiled({images: curentPerson.moreImages});
            $('.js-pop-album').html(moreImagesCompiledStr);
            $('.js-mask').show();

            $('.js-pop-album').show();

            var $albumBox = $('.album-inner');
            if( $albumBox.find('.album li').length == 1){
                $('.js-pre,.js-next').hide();
            } else{
                $('.js-pre,.js-next').show();
            }
            var albumBoxWidth = $('.album li').length * 600;
            $albumBox.css('width',albumBoxWidth );

        };



    });


// 关闭弹层
    $(document).on('click', '.js-pop-close', function () {
        $('.js-mask').hide();

        $('.js-pop-album').hide()
    });


// 切换轮播

    $(document).on('click', '.js-next', function () {
        var item = $(".album-inner");
        var item_width = $(".album-outer").width();		 //获取滚动element父元素的宽度
        var $albumBox = $('.album-inner').width() - 600;

        var pos= item.position();					 //获取当前位置
        if(!item.is(":animated")){
            if(pos.left == -($albumBox)){              //如果当前位置Left等于滚动盒子宽度的负值，返回到首页
                item.animate({left:"0px"},1000)
            }else{
                item.animate({left:'-='+item_width},1000);
            }
        }
    });


    $(document).on('click', '.js-pre', function () {
        var item = $(".album-inner");
        var item_width = $(".album-outer").width();		 //获取滚动element父元素的宽度

        var $albumBox = $('.album-inner').width() - 600;

        var pos= item.position();					 //获取当前位置
        if(!item.is(":animated")){
            if(pos.left == 0){              //如果当前位置Left等于滚动盒子宽度的负值，返回到首页
                item.animate({left:-($albumBox)},1000)
            }else{
                item.animate({left:'+='+item_width},1000);
            }
        }
    });




})