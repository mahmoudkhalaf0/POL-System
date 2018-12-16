$(document).ready(function () {
    
$('.content .content-nav .content-list ul li').click(function () {

    $(this).addClass('active').siblings().removeClass('active');

    $('.content .toggler > div').hide();

    var data = $(this).data('class');

    $(data).show();

})
});