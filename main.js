let headerNavMenu = document.querySelector('.nav__menu');
let headerNavLine = document.querySelector('.nav__line');
let headerList = document.querySelector('.nav__list');

headerNavLine.addEventListener('click', function (e) {
   this.classList.toggle('active');
   headerList.classList.toggle('active');
   headerNavMenu.classList.toggle('active');
})