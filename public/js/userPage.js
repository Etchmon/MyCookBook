$(document).ready(function() {
  var userInput = $("#createUser");
  var userPassword = $("#createPswrd");
  var oldUser = $("#loginUser");
  var oldUserPass = $("#loginPswrd");
  var userImage = $("#photo");

<<<<<<< HEAD
  $(document).on("click", "#add-btn", authenticateUser);
=======
>>>>>>> ce7d33dc035556c8bc61f655cd2b248d0057ebc6
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
>>>>>>> ce7d33dc035556c8bc61f655cd2b248d0057ebc6
      return;
    }

    insertUser({
      user_name: userInput.val().trim(),
      password: userPassword.val().trim(),
      link: userImage.val().trim()
    });
  }
  function insertUser(data) {
    $.post("/api/users", data, function(res) {
      console.log(res);
      localStorage.setItem("user", res.id);
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
        window.location.href = "/cookbook";
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
