$(document).ready(function() {
  var recipe = localStorage.getItem("recipe")
  // recipeNameHolderVal holds the name of the recipe
  var recipeNameHolderVal = $("#recipeNameHolder");

  // ingredientsHolderVal holds the ingredients of the recipe
  var ingredientsHolderVal = $("#ingredientsHolder");

  // intructionsHolderVal holds the instructions of the recipe
  var intructionsHolderVal = $("#intructionsHolder");

 


  // Calling the handlePostRecipe function
  handleGetRecipe();


  // This function grabs recipes from the database and updates the view
  function  handleGetRecipe() {

    $.get("/api/recipes/"+recipe, function(response) {
      console.log(response)
      //recipeData = response;
      if (!response){// || !response.length) {
        recipeNameHolderVal.text("No Recipe Entered into Database");
        console.log("got here")
      } else {
        recipeNameHolderVal.append(response.recipeName);
        ingredientsHolderVal.append(response.ingredients);
        intructionsHolderVal.append(response.instructions);

        var ingredientsStr = response.ingredients;
        var ingredientsArr = ingredientsStr.split(",");

        for (var i = 0; i < ingredientsArr.length; i++) { 
          var list = $("<li>");
          list.append(ingredientsArr[i]);
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
<<<<<<< HEAD
      user_id: $("#userIdHolder")
        .val()
        .trim(),
      recipe_id: url.split("=")[1],
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
=======
      user_id: localStorage.getItem("user"),
      recipe_id: recipe,
>>>>>>> ff5e36ad63884e41cdc5e2b2488922c44f083daa
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