

// Get references to page elements
var $characterText = $("#example-text");
var $characterDescription = $("#example-description");
var $submitBtn = $("#submit");
var $characterList = $("#example-list");






// The API object contains methods for each kind of request we'll make
var API = {
    saveCharacter: function(character) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/characters",
        data: JSON.stringify(character)
      });
    },
    getCharacters: function() {
      return $.ajax({
        url: "api/characters",
        type: "GET"
      });
    },
    deleteCharacter: function(id) {
      return $.ajax({
        url: "api/characters/" + id,
        type: "DELETE"
      });
    }
  };
  
  // refreshExamples gets new examples from the db and repopulates the list
  var refreshCharacters = function() {
    API.getCharacters().then(function(data) {
//**************************************************************************
      var chosenClass = $("<select>");
      chosenClass.attr("class", "chosen-select");
      chosenClass.attr("id", "character-select");


  for (var i = 0; i < data.length; i++) {
    var selectOption = $("<option>")
    selectOption.text(data[i].character_name)
    //console.log(response)
    $("#character-select").append(selectOption)
  }


<h3>
<strong>Question 1</strong>
</h3>
<h4>Your mind is always buzzing with unexplored ideas and plans.</h4>
<select class="chosen-select" id="q1">
<option value=""></option>
<option value="1">1 (Strongly Disagree)</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5 (Strongly Agree)</option>
</select>




//**************************************************************************
      var $characters = data.map(function(example) {
        var $a = $("<a>")
          .text(character.text)
          .attr("href", "/character/" + example.id);
  
        var $li = $("<li>")
          .attr({
            class: "list-group-item",
            "data-id": character.id
          })
          .append($a);
  
        var $button = $("<button>")
          .addClass("btn btn-danger float-right delete")
          .text("ｘ");
  
        $li.append($button);
  
        return $li;
      });
  
      $characterList.empty();
      $characterList.append($characters);
    });
  };


  function selectSubject() {
    $.ajax({
      url: "http://www.politifact.com/api/subjects/all/json/",
      method: "GET",
      dataType: "jsonp"
    }).then(function (response) {
      for (var i = 0; i < response.length; i++) {
        var selectOption = $("<option>")
        selectOption.text(response[i].subject_slug)
        //console.log(response)
        $(".subject-slug").append(selectOption)
      }
    })
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getAuthors() {
    $.get("/api/authors", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      nameInput.val("");
    });
  }