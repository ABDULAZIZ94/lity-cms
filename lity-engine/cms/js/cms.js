$("#btn1").click(function(){
  alert("Value: " + $("#test").val());
});
$("#a_pagebuilder").click(function(){
  $.ajax({url: "/page-builder", success: function(result){
    $("#main").html(result);
  }});
});
$("#a_pages").click(function(){
  $.ajax({url: "/pages", success: function(result){
    $("#main").html(result);
  }});
});
$("#a_posts").click(function(){
  $.ajax({url: "/posts", success: function(result){
    $("#main").html(result);
  }});
});
$("#a_users").click(function(){
  $.ajax({url: "/users", success: function(result){
    $("#main").html(result);
  }});
});




