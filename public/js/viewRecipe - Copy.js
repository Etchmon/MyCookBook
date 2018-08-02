$(document).ready(function() {
  // userIdHolderVal holds the User ID of the recipe

  var userIdHolderVal = localStorage.user;

  console.log("userIdHolderVal: " + userIdHolderVal);

  //var userIdHolderVal = $("#userIdHolder");
  console.log("Start of viewRecipe");
  // Calling the handleGetUserId function
  // handleGetUserId();

  // recipeNameHolderVal holds the name of the recipe
  var recipeNameHolderVal = $("#recipeNameHolder");

  // ingredientsHolderVal holds the ingredients of the recipe
  var ingredientsHolderVal = $("#ingredientsHolder");

  // intructionsHolderVal holds the instructions of the recipe
  var intructionsHolderVal = $("#intructionsHolder");

  // Click events for the add recipe
  $(document).on("click", ".viewbtn", handleAddRecipe);

  //function handleGetUserId() {
  // The code below handles getting the User ID
  //   $.get("/api/user", function(data) {
  //     userIdHolderVal.text("User ID: " + data.user_id);
  //   });
  // }

  // Variable to hold our recipe
  var recipe;

  // Calling the handlePostRecipe function
  handleGetRecipe();

  function handleGetRecipe() {
    // The code below handles the case where we want a specific recipe
    // Looks for a query param in the url for recipe_id
    var url = window.location.search;
    var recipeId;

    recipeId = url.split("=")[1];
    getRecipes(recipeId);
  }

  // This function grabs recipes from the database and updates the view
  function getRecipes(recipeId) {


    recipeId = "/?recipe_id=" + recipeId;

    $.get("/api/recipes" + recipeId, function(data) {
      console.log("Recipe", data);
      recipe = data;
      if (!recipe || !recipe.length) {
        recipeNameHolderVal.text("No Recipe Entered into Database");
      } else {
        recipeNameHolderVal.append(data[recipeId].recipeName);
        ingredientsHolderVal.append(data[recipeId].ingredients);
        intructionsHolderVal.append(data[recipeId].instructions);
      }
    });
  }

  function handleAddRecipe() {
    // Make a newKeyPair object
    var newKeyPair = {
      id: user.val().trim(),
      recipe_id: url.split("=")[1],
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
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