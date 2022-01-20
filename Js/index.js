const openNav = document.querySelector('.open-btn');
const closeNav = document.querySelector('.close-btn');
const menu = document.querySelector('.nav-list');


const menuLeft =  menu.getBoundingClientRect().left;
openNav.addEventListener("click", () =>{
    if(menuLeft < 0){
        menu.classList.add("show");
    }
});

closeNav.addEventListener("click", ()=>{
    if(menuLeft < 0){
        menu.classList.remove("show");
    }
});


const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});