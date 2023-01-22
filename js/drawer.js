let drawer = document.querySelector('#drawer');
let closeDrawer = document.querySelector('#close-drawer');
let navMenu = document.querySelector('.nav-menu');

drawer.addEventListener('click',(e)=>{
    closeDrawer.classList.remove('hidden');
    drawer.classList.add('hidden');
    navMenu.style.transform='translatex(0)';
});

closeDrawer.addEventListener('click',(e)=>{
    drawer.classList.remove('hidden');
    closeDrawer.classList.add('hidden');
    navMenu.classList.remove('show-drawer');
    navMenu.style.transform='translatex(100%)';


});