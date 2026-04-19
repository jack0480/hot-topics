const content = document.getElementById("content");
const links = document.querySelectorAll("nav a");

const loadContent = (url) => {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data;
        })
        .catch(error => console.log(error));
};

const selectContent = (e) => {
    e.preventDefault();
    const url = e.target.getAttribute("href");
    loadContent(url);
};

links.forEach(link => {
    link.addEventListener("click", selectContent);
});

loadContent("partials/home.html");