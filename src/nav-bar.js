let toggleNavbar = () => {
    let navBar = document.querySelector("#nav-bar");
    navBar.classList.toggle("visible");
    navBar.classList.toggle("invisible");
};

document.querySelector("#nav-bar-open").addEventListener("click", toggleNavbar);
document.querySelector("#nav-bar-close").addEventListener("click", toggleNavbar);
document.querySelectorAll("#nav-bar > a").forEach((e) => {
    e.addEventListener("click", () => { toggleNavbar();});
});