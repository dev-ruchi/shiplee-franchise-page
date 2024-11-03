// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Accordion for "Why Choose Shiplee" Section
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    const header = item.querySelector("h3");
    header.addEventListener("click", () => {
        item.classList.toggle("active");
        const content = item.querySelector("p");
        if (item.classList.contains("active")) {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});
