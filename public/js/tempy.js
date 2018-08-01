
$.get('/api/recipes', function(res){
    for(var i =0; i < res.length; i++){
      var recipe = $('<div>');
      recipe.append('<p>' + res[i].name '</p>');
      recipe.attr('data-id', res[i].id);
      recipe.addClass('recipe');
      $('#recipeList').append(recipe);
    }
  })
  $('#recipeList').on('click', '.recipe', function(){
    var recipeId = $(this).attr('data-id').val();
    localStorage.setItem('recipe', recipeId);
    // window.location change to /viewRecipe
  })
  
  // viewRecipe.js
  var recipeId = localStorage.recipeId
  
  $.get('/api/recipe/' + recipeId, function())
  