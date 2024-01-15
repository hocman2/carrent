let animElements = document.querySelectorAll(".scroll-anim");
const ANIM_PX_THRESHOLD = 150;

window.addEventListener("scroll", () => {
    let winHeight = window.innerHeight;
    for (let element of animElements) {
        let elementTop = element.getBoundingClientRect().top;

        if (elementTop < winHeight - ANIM_PX_THRESHOLD) {
            element.classList.add("active");
        }
        else if (elementTop > winHeight) {
            element.classList.remove("active");
        }
    }
});