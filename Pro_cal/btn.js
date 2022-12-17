$(document).ready(function () {
    $(".line1").attr("isselected", "false");
    $(".line2").attr("isselected", "false");
    $(".line3").attr("isselected", "false");
    $(".line1").click(function () {
        $(".line1").attr("isselected", "false");
        $(this).attr("isselected", "true");
    });
    $(".line2").click(function () {
        $(".line2").attr("isselected", "false");
        $(this).attr("isselected", "true");
    });
    $(".line3").click(function () {
        if ($(this).attr("isselected") == 'false') {
            $(this).attr("isselected", "true");
        }
        else{
            $(this).attr("isselected", "false");
        }
    });
});