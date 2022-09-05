function e() {
  const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', function(e) {
    const ul = document.querySelector('nav > ul');
    ul.classList.toggle('menu-slide');
    hamburger.classList.toggle('cross')
  });
}
}