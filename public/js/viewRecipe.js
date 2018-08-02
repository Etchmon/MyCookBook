$(document).ready(function() {
  
  // recipeNameHolderVal holds the name of the recipe
  var recipeNameHolderVal = $("#recipeNameHolder");

  // ingredientsHolderVal holds the ingredients of the recipe
  var ingredientsHolderVal = $("#ingredientsHolder");

  // intructionsHolderVal holds the instructions of the recipe
  var intructionsHolderVal = $("#intructionsHolder");

 


  // Calling the handlePostRecipe function
  handleGetRecipe();


  // This function grabs recipes from the database and updates the view
  function  handleGetRecipe {

    $.get("/api/recipes/"+recipe, function(response) {
      recipeData = response;
      if (!recipeData || !recipeData.length) {
        recipeNameHolderVal.text("No Recipe Entered into Database");
      } else {
        recipeNameHolderVal.append(response[0].recipeName);
        ingredientsHolderVal.append(response[0].ingredients);
        intructionsHolderVal.append(response[0].instructions);

        var ingredientsStr = response[0].ingredients;
        var ingredientsArr = ingredientsStr.split(",");

        for (var i = 0; i < ingredientsArr.length; i++) { 
          var list = $("<li>");
          list.append(ingredients.val().trim());
          $(".list").append(list); 
        }

      }
    });
  }

 // Click events for the add recipe
 $(document).on("click", ".viewbtn", handleAddRecipe);


  function handleAddRecipe() {
    // Make a newKeyPair object
    var newKeyPair = {
      user_id: user,
      recipe_id: recipe,
    };

    console.log(newKeyPair);

    // Send an AJAX POST-request with jQuery
    $.post("/api/newKeyPair", newKeyPair)
      // On success, run the following code
      .then(function() {
        console.log("newKeyPair: " + newKeyPair);
        // Takes user to their cookbook page
        window.location.href = "/cookbook";
      });
  }
});
