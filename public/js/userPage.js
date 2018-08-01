<<<<<<< HEAD
$(document).ready(function () {
  var userSearch = $("#loginUser");
  var passwordSearch = $("#loginPswrd")

=======
$(document).ready(function() {
>>>>>>> c9129eb4988667e5bf08511cd56518851e1da6f0
  var userInput = $("#createUser");
  var userPassword = $("#createPswrd");
  var oldUser = $("#loginUser");
  var oldUserPass = $("#loginPswrd");


  $(document).on("click", "#add-btn", authenticateUser);
  $(document).on("click", "#add-btn2", handleUser);
  $(document).on("click", "#add-btn", checkUser);

  function handleUser(event) {
    event.preventDefault();
<<<<<<< HEAD
    if (!userInput.val().trim()) {
=======
    if (
      !userInput
        .val()
        .trim()
        .trim()
    ) {
>>>>>>> c9129eb4988667e5bf08511cd56518851e1da6f0
      return;
    }

    insertUser({
      user_name: userInput.val().trim(),
      password: userPassword.val().trim()
    });
  }
  function insertUser(data) {
    $.post("/api/users", data, function (response) {
      console.log(response);
      console.log(response.id);
      var userString = response.id;
      localStorage.setItem("user", userString);
      // window.location.href = "/cookbook";
    });
  }

  function authenticateUser(event) {
    event.preventDefault();
    if (!userSearch.val().trim()) {
      return;
    }

    findUser({
      user_name: userSearch.val().trim(),
      password: passwordSearch.val().trim()
    });
  }

  function findUser(data) {
    $.get("/api/users", data, function (response) {
      console.log(response);
      console.log(response.id);
      var userString = response.id;
      localStorage.setItem("user", userString);
      // window.location.href = "/cookbook";
    });
  }
  function checkUser(event) {
    event.preventDefault();
    var userData = {
      user_name: oldUser.val().trim(),
      password: oldUserPass.val().trim()
    };
    $.ajax({ method: "POST", url: "/api/login", data: userData })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
