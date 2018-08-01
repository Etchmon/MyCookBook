$(document).ready(function() {
  var userInput = $("#createUser");
  var userPassword = $("#createPswrd");
  var oldUser = $("#loginUser");
  var oldUserPass = $("#loginPswrd");

  $(document).on("click", "#add-btn2", handleUser);
  $(document).on("click", "#add-btn", checkUser);

  function handleUser(event) {
    event.preventDefault();
    if (
      !userInput
        .val()
        .trim()
        .trim()
    ) {
      return;
    }

    insertUser({
      user_name: userInput.val().trim(),
      password: userPassword.val().trim()
    });
  }
  function insertUser(data) {
    $.post("/api/users", data, function() {
      window.location.href = "/cookbook";
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
