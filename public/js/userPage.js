$(document).ready(function () {
  var userInput = $("#createUser");
  var userPassword = $("#createPswrd");

  $(document).on("click", "#add-btn2", handleUser);

  function handleUser(event) {
    event.preventDefault();
    if (!userInput.val().trim()) {
      return;
    }

    insertUser({
      user_name: userInput.val().trim(),
      password: userPassword.val().trim()
    });
  }
  function insertUser(data) {
    $.post("/api/users", data, function(response) {
      console.log(response);
      var userString = JSON.stringify(response.id);
      localStorage.setItem("user", userString);
      // window.location.href = "/cookbook";
    });
  }
});
