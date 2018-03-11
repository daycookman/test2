
$(document).ready(function(){

  $('#js').on('click',function(){
    var elem ='<a href="#">次のページ</a>';
    $("#js").html(elem);
    $("#js").text(elem);
    $("#js").css("color","#ff0");
    $("#js").show(4000);
    $("#js").prepend(elem);
    $("#js").append(elem);
    // $("#js").empty();
    // $("#js").remove();
  });

  $("#ex").html();

  $('#show').on('click',function(){
    $("#ex").fadeIn(2000);
  });

  $('#hide').on('click',function(){
    $("#ex").fadeOut(2000);
  });

  var countUpValue = 0;

  $('#show').on('click',function(){
    countUpValue++;
    $("#ex").text(countUpValue);
    $("#ex").css("border", countUpValue + "px solid #000");
  });


  $("#exe").html("<p>かきくけこ</p>");
  $("#exe").css("display","none");
  $("#exe").fadeIn(4000);
  $("#exe").css("background","#000");
  $("#exe").css("color","#fff");
  $("#exe").prepend("<p>あいうえお</p>");
  $("#exe").append("<p>さしすせそ</p>");
  $("p:odd").css("background","#fff");
  // $("p:even").css("background","#fff");


});
