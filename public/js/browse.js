$(document).ready(function () {
    $.get("/api/recipes/", function (data) {

        data.forEach(response => {
            //$.get("/api/recipes/" + element.recipe_id, function (response) {
                console.log(response)
                var recipe = $("<div>");
                recipe.append("<tr>" + "<td>" + "<a href=/view>" + response.recipeName + "</a>" + "</td>" + "</tr>");
                recipe.attr("data-id", response.id);
                recipe.addClass("recipe");
                $("#recipeLinksAll").append(recipe);
           // });
        });

        $(document).on("click", ".recipe", function () {
            var recipeId = $(this).attr("data-id");
            localStorage.setItem("recipe", recipeId);
            window.location.href = "/cookbook";
        });
    });

});
