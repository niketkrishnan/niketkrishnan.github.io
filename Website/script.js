
document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = "#00ffcc";
        }
    });
});

let backToTop = document.createElement("button");
backToTop.id = "backToTop";
backToTop.innerText = "↑ Top";
document.body.appendChild(backToTop);

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

backToTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}
