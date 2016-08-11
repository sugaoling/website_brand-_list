/**
 * Created by xiaochuan on 2016/8/11.
 */
$(function () {
    /*1.隐藏品牌*/
    var $category=$("ul li:gt(5):not(:last)");//从第7条开始直到倒数第二条
    $category.hide();
    var $toggleBtn=$("div .showMore > a");
    $toggleBtn.click(function () {
        if ($category.is(":visible")) {
            /*隐藏第7条开始直到倒数第二条*/
            $category.hide();
            /*改变小图标及文字*/
            $(".showMore a span").css("background", "url(image/down.gif) no-repeat 0 0").text("显示全部品牌");
            /*去除品牌de高亮状态*/
            $('ul li').removeClass("promoted");
        } else {
            /* 点击显示全部品牌*/
            /*列表展开*/
            $category.show();
            $(".showMore a span").css("background", "url(image/up.gif)  no-repeat 0 0")
                .text("精简显示品牌");
            /*高亮推荐品牌*/
            $("ul li").filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")
                .addClass("promoted");
        }
        return false;
    });
});


