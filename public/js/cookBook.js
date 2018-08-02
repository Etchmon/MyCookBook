$(document).ready(function() {
  var userId = localStorage.getItem("user");
  $.get("/api/recipesUser/" + localStorage.getItem("user"), function (data) {

    data.forEach(element => {
      $.get("/api/recipes/" + element.recipe_id, function (response) {
        console.log(response)
        var recipe = $("<div>");
        recipe.append("<tr>" + "<td>" + "<a href=/view>" + response.recipeName + "</a>"+"</td>" + "</tr>");
        recipe.attr("data-id", response.id);
        recipe.addClass("recipe");
        $("#recipeLinksUser").append(recipe); 
      });
    });

    $(document).on("click", ".recipe", function() {
      var recipeId = $(this).attr("data-id");
      localStorage.setItem("recipe", recipeId);
      window.location.href = "/cookbook";
    });
  });

  //append username and photo to page
  $.get("/api/user/" + userId, function(data) {
    $("#userName").text(data.user_name);
    $("#userImg").attr("src", data.link);
  });
});
