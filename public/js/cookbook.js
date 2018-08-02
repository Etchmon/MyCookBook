$(document).ready(function() {
    var userId = localStorage.getItem("user");

    $.get("/api/recipesUser/" + userId, function (response) {
   
        response.forEach(element => {
          $.get("/api/recipes/" + element.recipe_id, function (res) {
          
              var recipe = $("<div>");
              recipe.append("<tr>" + "<td>" + res.name + "</td>" + "</tr>");
              recipe.attr("data-id", res.id);
              recipe.addClass("recipe");
              $("#recipeList").append(recipe);
          
          });
        });      
      });

    $("#recipeList").on("click", ".recipe", function() {
      var recipeId = $(this)
        .attr("data-id")
        .val();
      localStorage.setItem("recipe", recipeId);
      window.location.href = "/add";
    });
   });
   
   
   
   //append username and photo to page
   $.get("/api/user/" + userId, function(data) {
    $("#userName").text(data.user_name);
    $("#userImg").attr("src", data.link);
   });