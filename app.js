document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var offset = navbar.offsetTop;

    function handleScroll() {
        if (window.pageYOffset > offset) {
            navbar.classList.add("fixed-element");
        } else {
            navbar.classList.remove("fixed-element");
        }
    }

    window.addEventListener("scroll", handleScroll);
});