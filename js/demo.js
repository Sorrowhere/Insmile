$(function(){


    var dataSource = {
        'beijing': [
            {
                area: '中国华北总部',
                shopName:'北京总店',
                name:'王嘉池',
                image:'../img/contact/beijing/wangjiachi/1.jpg',
            },
            {
                area: '',
                shopName:'国锐金嵿店',
                name:'孙程程',
                image:'../img/contact/beijing/sunchengcheng/1.jpg',
                moreImages:[
                    '../img/contact/beijing/sunchengcheng/2.jpg',
                    '../img/contact/beijing/sunchengcheng/3.jpg',
                    '../img/contact/beijing/sunchengcheng/4.jpg',
                    '../img/contact/beijing/sunchengcheng/5.jpg',
                ],
            },
            {
                shopName:'中关村店',
                name:'刘祯',
                image:'../img/contact/beijing/liuzhen/1.jpg',
                moreImages:[
                    '../img/contact/beijing/liuzhen/2.jpg',
                ],
            },
            {
                shopName:'中关村店',
                name:'张蕾',
                image:'../img/contact/beijing/zhanglei/1.jpg',
                moreImages:[
                   '../img/contact/beijing/zhanglei/2.jpg',
                ],
            },
            {
                shopName:'万科城市之光店',
                name:'张兰兰',
                image:'../img/contact/beijing/zhanglanlan/1.jpg',
                moreImages:['../img/contact/beijing/zhanglanlan/2.jpg'],
            },
        ],
        'shanghai': [
            {
                shopName:'青浦卓越世纪中心店',
                name:'吉丽雯',
                image:'../img/contact/shanghai/jiliwen/1.jpg',
                moreImages:[],
            },
            {
                shopName:'尚光徐汇店',
                name:'戴凌',
                image:'../img/contact/shanghai/dailing/1.jpg',
                moreImages:[
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
                ],
            },
            {
                shopName:'青浦卓越世纪中心店',
                name:'孙梦鸽',
                image:'../img/contact/shanghai/sunmengge/1.jpg',
                moreImages:[
                    '../img/contact/shanghai/sunmengge/2.jpg',
                    '../img/contact/shanghai/sunmengge/3.jpg',
                    '../img/contact/shanghai/sunmengge/4.jpg',
                    '../img/contact/shanghai/sunmengge/5.jpg',
                    '../img/contact/shanghai/sunmengge/6.jpg',
                ],
            },
            {
                shopName:'七宝万科国际店',
                name:'郁金婷',
                image:'../img/contact/shanghai/yujingting/1.jpg',
                moreImages:[
                    '../img/contact/shanghai/yujingting/2.jpg',
                    '../img/contact/shanghai/yujingting/3.jpg',
                    '../img/contact/shanghai/yujingting/4.jpg',
                ],
            },
        ],
        'shenzhen': [
            {
                shopName:'深圳中心店',
                name:'陈希桐',
                image:'../img/contact/shenzhen/chenxitong/1.jpg',
                moreImages:[
                    '../img/contact/shenzhen/yujingting/2.jpg',
                    '../img/contact/shenzhen/yujingting/3.jpg',
                ],
            },
            {
                shopName:'深圳宝安店',
                name:'蔡春晓',
                image:'../img/contact/shenzhen/caichunxiao/1.jpg',
                moreImages:[
                    '../img/contact/shenzhen/caichunxiao/2.jpg',
                    '../img/contact/shenzhen/caichunxiao/3.jpg',
                ],
            },
            {
                shopName:'龙岗区单店',
                name:'李嘉玲',
                image:'../img/contact/shenzhen/lijialing/1.jpg',
                moreImages:[],
            },
            {
                shopName:'华强店',
                name:'刘少霞',
                image:'../img/contact/shenzhen/liushaoxia/1.jpg',
                moreImages:[],
            },
            {
                shopName:'华强店',
                name:'姚少琼',
                image:'../img/contact/shenzhen/yaoshaoqiong/1.jpg',
                moreImages:[],
            },
            {
                shopName:'龙华新区店',
                name:'黄瑶',
                image:'../img/contact/shenzhen/huangyao/1.jpg',
                moreImages:[
                    '../img/contact/shanghai/huangyao/2.jpg',
                    '../img/contact/shanghai/huangyao/3.jpg',
                ],
            },
        ],
        'jinan': [
            {
                shopName:'祥泰广场店',
                name:'王路遥',
                image:'../img/contact/jinan/wangluyao/1.jpg',
                moreImages:[
                    '../img/contact/jinan/wangluyao/2.jpg',
                    '../img/contact/jinan/wangluyao/3.jpg',
                    '../img/contact/jinan/wangluyao/4.jpg',
                    '../img/contact/jinan/wangluyao/5.jpg',
                    '../img/contact/jinan/wangluyao/6.jpg',
                    '../img/contact/jinan/wangluyao/7.jpg',
                    '../img/contact/jinan/wangluyao/8.jpg',
                ],
            },
            {
                shopName:'名郡商务港店',
                name:'王路遥&曹瑾',
                image:'../img/contact/jinan/caojing/1.jpg',
                moreImages:[
                    '../img/contact/jinan/caojing/2.jpg',
                    '../img/contact/jinan/caojing/3.jpg',
                ],
            },
        ],
        'nanjing': [
            {
                shopName:'雨花区紫荆国际店',
                name:'林超',
                image:'../img/contact/nanjing/linchao/1.jpg',
                moreImages:[
                    '../img/contact/nanjing/linchao/2.jpg',
                    '../img/contact/nanjing/linchao/3.jpg',
                ],
            },
        ],
        'chengdu': [
            {
                shopName:'高新店',
                name:'杨雪帆',
                image:'../img/contact/chengdu/yangxuefan/1.jpg',
                moreImages:[
                    '../img/contact/chengdu/yangxuefan/2.jpg',
                    '../img/contact/chengdu/yangxuefan/3.jpg',
                    '../img/contact/chengdu/yangxuefan/4.jpg',
                ],
            },
            {
                shopName:'高新店',
                name:'徐小傑',
                image:'../img/contact/chengdu/xuxiaojie/1.jpg',
                moreImages:[],
            },
            {
                shopName:'高新店',
                name:'刘咏静',
                image:'../img/contact/chengdu/liuyongjing/1.jpg',
                moreImages:[
                    '../img/contact/chengdu/liuyongjing/2.jpg',
                    '../img/contact/chengdu/liuyongjing/3.jpg',
                    '../img/contact/chengdu/liuyongjing/4.jpg',
                    '../img/contact/chengdu/liuyongjing/5.jpg',
                    '../img/contact/chengdu/liuyongjing/6.jpg',
                ],
            },
        ],
        'xian': [
            {
                shopName:'金域国际店',
                name:'崔瑾',
                image:'../img/contact/xian/cuijing/1.jpg',
                moreImages:[
                    '../img/contact/xian/cuijing/2.jpg',
                    '../img/contact/xian/cuijing/3.jpg',
                ],
            },
        ],
        'ningbo': [
            {
                shopName:'余姚店',
                name:'丁丁',
                image:'../img/contact/ningbo/dingding/1.jpg',
                moreImages:[],
            },
        ],
        'dalian': [
            {
                shopName:'金普新区店',
                name:'顾文静',
                image:'../img/contact/dalian/guwenjing/1.jpg',
                moreImages:[
                    '../img/contact/dalian/guwenjing/2.jpg',
                ],
            },
        ],
        'suzhou': [
            {
                shopName:'华旭大厦店',
                name:'沈滔',
                image:'../img/contact/suzhou/shentao/1.jpg',
                moreImages:[
                    '../img/contact/suzhou/shentao/2.jpg',
                    '../img/contact/suzhou/shentao/3.jpg',
                ],
            },
            {
                shopName:'华旭大厦店',
                name:'李雯雯',
                image:'../img/contact/suzhou/liwenwen/1.jpg',
                moreImages:[
                    '../img/contact/suzhou/liwenwen/2.jpg',
                    '../img/contact/suzhou/liwenwen/3.jpg',
                ],
            },
        ],
        'dezhou': [
            {
                shopName:'德城区店',
                name:'秦硕蔓',
                image:'../img/contact/suzhou/liwenwen/1.jpg',
                moreImages:[],
            },
        ],
        'tangshan': [
            {
                shopName:'唐山店',
                name:'侯欣宇',
                image:'../img/contact/tangshan/houxinyu/1.jpg',
                moreImages:[
                    '../img/contact/tangshan/houxinyu/2.jpg',
                ],
            },
            {
                shopName:'唐山店',
                name:'张旭',
                image:'../img/contact/tangshan/zhangxu/1.jpg',
                moreImages:[
                    '../img/contact/tangshan/zhangxu/2.jpg',
                ],
            },
        ],
        'zhengzhou': [
            {
                shopName:'万达中心店',
                name:'小媛',
                image:'../img/contact/zhengzhou/xiaoyuan/1.jpg',
                moreImages:[],
            },
            {
                shopName:'万达中心店',
                name:'小萌',
                image:'../img/contact/zhengzhou/xiaomeng/1.jpg',
                moreImages:[],
            },
            {
                shopName:'万达中心店',
                name:'小海',
                image:'../img/contact/zhengzhou/xiaohai/1.jpg',
                moreImages:[],
            },
        ],
        'yanan': [
            {
                shopName:'延安店',
                name:'小媛',
                image:'../img/contact/yanan/xiaoyuan/1.jpg',
                moreImages:[],
            },
            {
                shopName:'延安店',
                name:'小萌',
                image:'../img/contact/yanan/xiaomeng/1.jpg',
                moreImages:[],
            },
        ],
        'zunyi': [
            {
                shopName:'桐梓店',
                name:'陈晓洁',
                image:'../img/contact/zunyi/chenxiaojie/1.jpg',
                moreImages:[],
            },
        ],
    };

    // 获取内容
    var currentCity = 'beijing'
    var currentData = dataSource[currentCity];
    var compiled = _.template($('#tpl').html());
    var str = compiled({data:currentData});
    $('.js-node').html(str);

    // 切换城市
    var $filterWrapper = $('.js-filter');
    $filterWrapper.on('click','a',function(){
        currentCity = $(this).attr('data-id');
        currentData = dataSource[currentCity];
        compiled = _.template($('#tpl').html());
        str = compiled({data:currentData});
        $('.js-node').html(str);
    });

    // 查看更多
    $(document).on('click','.js-more',function(){
        var moreImagesCompiled = '';
        var moreImagesCompiledStr = ''
        var index = $(this).attr('data-index');
        var curentPerson = currentData[index]
        if (curentPerson.moreImages && curentPerson.moreImages.length > 0 ) {
            moreImagesCompiled = _.template($('#tpl1').html());
            moreImagesCompiledStr = moreImagesCompiled({images:curentPerson.moreImages});
            $('.js-pop-album').html(moreImagesCompiledStr);
            $('.js-mask').show();

            $('.js-pop-album').show()
        }
    });


    // 关闭弹层
    $(document).on('click','.js-pop-close',function(){
        $('.js-mask').hide();

        $('.js-pop-album').hide()
    });


    // 切换轮播
    var bannerCell;
    bannerCell = $('.album li');
    // 页面渲染让第一个轮播图放在首屏
    bannerCell.eq(0).show();
    // 遍历轮播图一共多少个，然后遍历，添加同样个数的指示器
    $.each(bannerCell,function(){
        var indicatorCell = '<div></div>';
        $('.indicator').append(indicatorCell);
    });
    // 遍历指示器，添加点击事件
    $('.indicator>div').each(function(){

        $(this).click(function(){
            $(this).css('background','#fff').siblings().css('background','#ccc');

            var index = $(this).index();
            var bannerCellIndex = $('.banner-cell').eq(index);
            // jquery的animate动画函数
            bannerCellIndex.animate({
                opacity:0
            },function(){

                bannerCellIndex.css({
                    'z-index': 1,
                    'opacity': 1
                });

                bannerCellIndex.siblings().css({
                    'z-index':'2'
                })

            })
        })
    })




    // 其他
    var $navMenu = $('.js-mobile-menu');
    $navMenu.click(function(){
        $(this).toggleClass('nav-menu-on');
        $(this).next('.nav-lst').toggleClass('show');
    });


    var $tabMenu = $('.sidebar a');
    $tabMenu.click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var tabIndex = $tabMenu.index(this);
        $('.tab-con > section').eq(tabIndex).addClass('active').siblings().removeClass('active');
    });


    var $filterMenu = $('.filter a');
    $filterMenu.click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var areaIndex = $filterMenu.index(this);
        $('.area-box > .node').eq(areaIndex).show().siblings().hide();
    });

})