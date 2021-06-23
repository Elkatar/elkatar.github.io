var timeOutId = 0;
var ajaxFn = function () {
$.ajax({
url: 'https://rpgnamantei.ga/feeds/posts/default?alt=json',
type: "GET",
    dataType: "jsonp",
    success: function (data) {

var json = data.feed.entry;
   var text = "";
   
for (let i = 0; i < json.length; i++) {
  text +=  "<h3>" + json[i].title.$t + "</h3>  " + " " + json[i].content.$t  + " <hr>";

}

document.getElementById("json").innerHTML= " " + text + " ;";
    }, 
});
}
ajaxFn();
//OR use BELOW line to wait 10 secs before first call



$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 50){
        $("#navbar").addClass("navbar");
    }else{
        $("#navbar").removeClass("navbar");
    }
    
});

$(document).ready(function(){
 
   $("#menubook").height(window.innerHeight);
  $("#mainbook").height(window.innerHeight);
});

