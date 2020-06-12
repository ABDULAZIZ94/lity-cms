$("#btn1").click(function(){
  alert("Value: " + $("#test").val());
});
$("#a_pagebuilder").click(function(){
  $.ajax({url: "/admin-panel", success: function(result){
    $("#main").html(result);
  }});
});
