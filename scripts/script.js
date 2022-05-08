//-------------- search form ---------------------

let searchButton = document.querySelector('header .icons .fa-search');
let searchForm = document.querySelector('header .search_bar');

searchButton.addEventListener('click', () => {
    searchButton.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
});

// ------------- menu-mobile --------------------

let menuButton = document.querySelector('header #menu');
let navBar = document.querySelector('header .navbar');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

//---------------- scrolll --------------------

window.onscroll = () => {
    menuButton.classList.remove('fa-times');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    searchButton.classList.remove('fa-times');
}