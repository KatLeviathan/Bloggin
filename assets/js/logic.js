document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const backButton = document.getElementById("back-button");

    // Initial check to set the correct icon
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.classList.remove("fa-moon");
        themeToggle.classList.add("fa-sun");
        themeToggle.classList.add("dark-mode");
    } else {
        themeToggle.classList.remove("fa-sun");
        themeToggle.classList.add("fa-moon");
    }

    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        document.querySelector("header").classList.toggle("dark-mode");
        document.querySelector("footer").classList.toggle("dark-mode");
        document.querySelectorAll("nav ul li a").forEach(link => link.classList.toggle("dark-mode"));
        themeToggle.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.classList.remove("fa-moon");
            themeToggle.classList.add("fa-sun");
        } else {
            themeToggle.classList.remove("fa-sun");
            themeToggle.classList.add("fa-moon");
        }
    });

    if (backButton) {
        backButton.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});
