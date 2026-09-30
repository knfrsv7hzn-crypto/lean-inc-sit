const langBtn = document.getElementById('langBtn');
let lang = localStorage.getItem('leanLang') || 'en';

function applyLanguage(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en][data-ja]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  langBtn.textContent = lang === 'en' ? 'JP' : 'EN';
  document.title = lang === 'en'
    ? 'Lean Inc. | Global Trade & Technical Sales'
    : 'Lean Inc. | 海外取引・技術営業';
}

langBtn.addEventListener('click', () => {
  lang = lang === 'en' ? 'ja' : 'en';
  localStorage.setItem('leanLang', lang);
  applyLanguage();
});

applyLanguage();
document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
