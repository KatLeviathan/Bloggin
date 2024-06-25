document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("blog-form");
    const message = document.getElementById("form-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const title = document.getElementById("title").value.trim();
        const content = document.getElementById("content").value.trim();

        if (!username || !title || !content) {
            message.textContent = "Please complete all fields.";
            message.style.color = "red";
            return;
        }

        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push({ username, title, content });
        localStorage.setItem("posts", JSON.stringify(posts));

        form.reset();
        message.textContent = "Blog post submitted!";
        message.style.color = "green";

        setTimeout(() => {
            window.location.href = "blog.html";
        }, 1000);
    });
});
