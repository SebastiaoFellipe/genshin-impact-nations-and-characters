/*PEGAR POSIÇÃO DO MOUSE
var cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', function(e){
  cursor.style.top = e.pageY+'px';
  cursor.style.left = e.pageX+'px';
});
*/

// ANIMATION ON HEADER
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
});

// BUTTON TO TOP
const link_top = document.querySelector(".to-top");
link_top.style.display = 'none';
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 600) {
    link_top.style.display = 'block';
  } else {
    link_top.style.display = 'none';
  }
});

// OPEN AND CLOSE THE MENU
const mobile_menu_icon = document.querySelector('.mobile-menu-icon');
const mobile_menu_icon_open = document.querySelector('.menu-open');
const mobile_menu_icon_close = document.querySelector('.menu-close');
const mobile_nav_list_links = document.querySelectorAll('.mobile-nav-list-links');
const mobile_nav_list = document.querySelector('.mobile-nav-list');
mobile_menu_icon_open.style.display = 'block';
mobile_menu_icon_close.style.display = 'none';
for (let i = 0; i < mobile_nav_list_links.length; i++) {
  mobile_nav_list_links[i].addEventListener("click", function () {
    mobile_menu_icon_close.style.display = 'none';
    mobile_menu_icon_open.style.display = 'block';
    if (mobile_nav_list.classList.contains('close') || mobile_nav_list.classList.contains('open')) {
      mobile_nav_list.classList.toggle('open');
      mobile_nav_list.classList.toggle('close');
    } else {
      mobile_nav_list.classList.add('open');
    }
  });
}
mobile_menu_icon.addEventListener("click", function () {
  if (mobile_menu_icon_open.style.display === 'block') {
    mobile_menu_icon_open.style.display = 'none';
    mobile_menu_icon_close.style.display = 'block';
    console.log('abriu');
  } else if (mobile_menu_icon_open.style.display === 'none') {
    mobile_menu_icon_close.style.display = 'none';
    mobile_menu_icon_open.style.display = 'block';
    console.log('fechou');
  }
  if (mobile_nav_list.classList.contains('close') || mobile_nav_list.classList.contains('open')) {
    mobile_nav_list.classList.toggle('open');
    mobile_nav_list.classList.toggle('close');
  } else {
    mobile_nav_list.classList.add('open');
  }
});

// OPEN AND CLOSE THE ELEMENTS MODAL
const elements_card = document.querySelectorAll(".elements-card");
const elements_modal = document.querySelectorAll(".elements-modal");
const icon_modal_close = document.querySelectorAll(".modal-close");
const modal_fade = document.querySelector("#modal-fade");
const body = document.querySelector("body");
// OPEN MODAL
for (let i = 0; i < elements_card.length; i++) {
  elements_card[i].addEventListener("click", function () {
    console.log("abri");
    body.style.overflowY = 'hidden';
    elements_modal[i].show();
    elements_modal[i].blur();
    modal_fade.style.display = 'block';
    indice = i;
  });
}
// CLOSE MODAL BY CLICK ON THE BUTTON
for (let i = 0; i < icon_modal_close.length; i++) {
  icon_modal_close[i].addEventListener("click", function () {
    console.log("fechei com botao");
    elements_modal[i].close();
    modal_fade.style.display = 'none';
    body.style.overflowY = 'scroll';
  });
}
let indice;
modal_fade.addEventListener("click", function () {
  console.log("cliquei fora");
  elements_modal[indice].close();
  modal_fade.style.display = 'none';
  body.style.overflowY = 'scroll';
});
// CLOSE MODAL BY CLICK ON ESC BUTTON
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    elements_modal[indice].close();
    modal_fade.style.display = 'none';
    body.style.overflowY = 'scroll';
    console.log("fechei com esc");
  }
});
