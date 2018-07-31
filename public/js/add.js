$(document).ready(function () {






    function submitPost(post) {
        $.post("/api/posts", post, function () {
            window.location.href = "/blog";
        });
    }
})