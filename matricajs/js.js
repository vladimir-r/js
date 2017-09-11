
$(function () {

    function Add(hei, wid)
    {
        var count=0;
        var str="";
        var const_i=80/hei;
        var const_j=80/wid;
        for(i=0;i<hei;i++)
        {
            for(j=0;j<wid;j++)
            {
                $("#block").append("<div class='item' style='width:"+const_j+"%;height:"+const_i+"%;left:"+j*const_j+"%;top:"+i*const_i+"%'>"+count+++"</div>");
            }
        }
    }
var a=prompt("row");
var b=prompt("str");
Add(a,b);
$(".item").on('click', function(){

    $(this).remove();
})

})