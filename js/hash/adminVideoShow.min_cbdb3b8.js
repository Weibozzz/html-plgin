$(function(){getVideoShow();$(document).on("click","[id*\x3ddelVideo_]",function(){var a=$(this).attr("id").substring($(this).attr("id").indexOf("_")+1);query("./api/delVideo.php",{id:a,type:"del"},"get",!0,function(a){$(".my-modal-body").html(a);$("#myModal").modal("show");setTimeout(function(){$("#myModal").modal("hide")},1200);getVideoShow()})});$(document).on("click","[id*\x3ddelVideoTrue_]",function(){var a=$(this).attr("id").substring($(this).attr("id").indexOf("_")+1),c=$("#updateName_"+a).val(),
d=$("#updateUrl_"+a).val();query("./api/delVideo.php",{id:a,type:"update",name:c,url:d},"get",!0,function(a){$(".my-modal-body").html(a);$("#myModal").modal("show");setTimeout(function(){$("#myModal").modal("hide")},1200);getVideoShow()})})});
function getVideoShow(){query("./api/adminGetVideo.php",{},"get",!0,function(a){if("0"!==a){a=JSON.parse(a).list;var c="",d="",e;for(e in a[0])c+='\n                \x3ctd class\x3d"text-center"\x3e'+e+"\x3c/td\x3e\n                ";c+='\n                    \x3ctd class\x3d"text-center"\x3e\u64cd\u4f5c\x3c/td\x3e\n                    \x3ctd class\x3d"text-center"\x3e\u4fee\u6539\x3c/td\x3e\n                    ';$("#videoShow thead tr").html(c);$.each(a,function(a,b){d+="\n                \x3ctr \x3e\n                \x3ctd\x3e"+
b.id+'\x3c/td\x3e\n                \x3ctd style\x3d"width: 500px"\x3e\x3cinput id\x3d"updateName_'+b.id+'" class\x3d"form-control" type\x3d"text" value\x3d"'+b.name+'" title\x3d"\u53ef\u4fee\u6539\u89c6\u9891\u94fe\u63a5\u548c\u6807\u9898"\x3e\x3c/a\x3e\x3c/td\x3e\n                \x3ctd\x3e\x3cinput id\x3d"updateUrl_'+b.id+'" class\x3d"form-control" type\x3d"text" value\x3d"'+b.url+'" title\x3d"\u53ef\u4fee\u6539\u89c6\u9891\u94fe\u63a5\u548c\u6807\u9898"\x3e\x3c/td\x3e\n                \x3ctd style\x3d"width: 180px"\x3e'+
b.createTime+"\x3c/td\x3e\n                \x3ctd id\x3ddelVideo_"+b.id+" \x3e\u5220\u9664\x3c/td\x3e\n                \x3ctd id\x3ddelVideoTrue_"+b.id+" \x3e\u786e\u5b9a\x3c/td\x3e\n                \x3c/tr\x3e"});$("#videoShow tbody").html(d)}})};