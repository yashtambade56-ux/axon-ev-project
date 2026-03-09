  // NAVBAR HIDE/SHOW ON SCROLL
  let lastScrollTop = 0;
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function(){
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if(st > lastScrollTop){
      // scroll down → hide
      navbar.style.top = '-120px';
    } else {
      // scroll up → show
      navbar.style.top = '20px';
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }, false);

  // filer
  // Price range display
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

// Initialize
priceValue.textContent = priceRange.value;

// Update on input
priceRange.addEventListener('input', function() {
    priceValue.textContent = this.value;
});