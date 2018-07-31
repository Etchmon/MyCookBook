$(document).ready(function() {
  var userInput = $("#createUser");
  var userPassword = $("#createPswrd");
  $(document).on("submit", "#userForm", handleUser);

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
    $.post("/api/authors", data).then(data);
  }
});
