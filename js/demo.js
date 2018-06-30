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
                ],
            },
            {
                shopName:'青浦卓越世纪中心店',
                name:'吉丽雯',
                image:'../img/contact/shanghai/jieliwen/1.jpg',
                moreImages:[],
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
        ],
        'shenzhen': [],
        'jinan': [],
        'nanjing': [],
        'chengdu': [],
        'xian': [],
        'ningbo': [],
        'dalian': [],
        'suzhou': [],
        'dezhou': [],
        'tangshan': [],
        'zhengzhou': [],
        'yanan': [],
        'zunyi': [],
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
    })


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