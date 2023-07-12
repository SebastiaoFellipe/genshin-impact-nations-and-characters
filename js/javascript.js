/*PEGAR POSIÇÃO DO MOUSE
var cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', function(e){
  cursor.style.top = e.pageY+'px';
  cursor.style.left = e.pageX+'px';
});
*/
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
});
