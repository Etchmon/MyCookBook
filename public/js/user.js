$(document).ready(function () {
  var userInput = $("#createUser");
  var userPassword = $("#createPswrd");

  $(document).on("click", "#add-btn2", handleUser);

  function handleUser(event) {
    event.preventDefault();
    if (!userInput.val().trim().trim()) {
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
});
