$(document).ready(function() {
    var userId = localStorage.getItem("user");
    $.get("/api/recipes/" + userId, function(res) {
      response.forEach(element => {
        $.get("/api/recipes/" + element.recipe_id, function (response) {
      for (var i = 0; i < res.length; i++) {
        var recipe = $("<div>");
        recipe.append("<tr>" + "<td>" + res[i].name + "</td>" + "</tr>");
        recipe.attr("data-id", res[i].id);
        recipe.addClass("recipe");
        $("#recipeList").append(recipe);
      }
   
    });
   });
    $("#recipeList").on("click", ".recipe", function() {
      var recipeId = $(this)
        .attr("data-id")
        .val();
      localStorage.setItem("recipe", recipeId);
      window.location.href = "/viewRecipe";
    });
   });
   
   
   
   //append username and photo to page
   $.get("/api/user/" + userId, function(data) {
    $("#userName").text(data.user_name);
    $("#userImg").attr("src", data.link);
   });