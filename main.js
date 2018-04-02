//в этом блоке - добавление модального окна на "Моя биография поподробнее"

let button = document.querySelector(".js-info-switcher");
let modalWindow = document.querySelector (".modal");
let closeButton = document.querySelector(".modal__close");


function showModal () {
    modalWindow.style.display = "block";
}

function hideModal() {
    modalWindow.style.display = "none";
}

function removeModalFromWindow() {
    if (event.target === modalWindow) {
        modalWindow.style.display = "none";
    }
}

button.addEventListener("click", showModal);
closeButton.addEventListener("click", hideModal);
window.addEventListener("click", removeModalFromWindow);

//Здесь добавляю табы на "Обо мне" и "Мои проекты"

function ObjectElements (header, content) {
    this.header = header;
    this.content = content;
}

let projectsObject = new ObjectElements(projectsHeader, tabProjects);
let infoObject = new ObjectElements(infoHeader, tabInfo);

let infoHeader = document.getElementsByClassName("js-info-header")[0];
let projectsHeader = document.getElementsByClassName("js-projects-header")[0];
let tabInfo = document.getElementsByClassName("js-tab-info")[0];
let tabProjects = document.getElementsByClassName("js-tab-projects")[0];

function toggleClass() {
    let header = event.target;

    if content.classList.contains("hidden") {
        content.classList.remove("hidden");
        header.classList.add("section-toggler__button--active");
    }
}

infoHeader.addEventListener("click", toggleClass);
projectsHeader.addEventListener("click", toggleClass);
