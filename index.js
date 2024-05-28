const menuBtn = document.querySelectorAll('.menuBtn');
console.log(menuBtn);
const allMenu = [...menuBtn];
allMenu.forEach(item => {
        item.addEventListener('click', function () {
            let slideNav = document.querySelector('.black');
            slideNav.classList.toggle('active')});
})