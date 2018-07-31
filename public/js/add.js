$(document).ready(function () {
    var recipeName = $("#title");
    var ingredients = $("#ingredient");
    var instruction = $("#body");

    $(document).on("click", ".submit", handleRecipe);

    function handleRecipe(event) {
        event.preventDefault();
        if (!recipeName.val().trim().trim()) {
            return;
        }

        insertRecipe({
            recipeName: recipeName.val().trim(),
            ingredients: ingredients.val().trim(),
            instructions: instruction.val().trim()
        });
    }
    function insertRecipe(data) {
        $.post("/api/recipes", data, function () {
            window.location.href = "/cookbook";
        });
    }
})