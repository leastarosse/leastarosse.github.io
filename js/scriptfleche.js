// Afficher ou cacher la flèche en fonction du défilement
window.addEventListener('scroll', () => {
  const backToTop = document.getElementById('backToTop');
  if (window.scrollY > 200) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

// Défilement fluide vers le haut
document.getElementById('backToTop').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
