$(document).ready(function () {
    var recipeName = $("#title");
    var ingredients = $("#ingredient");
    var instruction = $("#body");
    var allIngredients = [];

    $(document).on("click", ".submit", handleRecipe);
    $(document).on("click", ".add", addIngredient);

    function handleRecipe(event) {
        event.preventDefault();
        if (!recipeName.val().trim().trim()) {
            return;
        }

        insertRecipe({
            recipeName: recipeName.val().trim(),
            ingredients: allIngredients.join(),
            instructions: instruction.val().trim(),
            userid: localStorage.getItem("user")
        });
    }
    function insertRecipe(data) {
        $.post("/api/recipes", data, function () {
            window.location.href = "/cookbook";
        });
    }s

    function addIngredient() {
        allIngredients.push(ingredients.val().trim());
        console.log(allIngredients);
        // ingredients.val("");
        var list = $("<li>");
        list.append(ingredients.val().trim());
        $(".list").append(list);
    }
})