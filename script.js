const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30));
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

// Gentle reveal animation without external libraries.
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});
},{threshold:.12});
document.querySelectorAll('.card,.destination-grid article,.review-grid blockquote,.gallery img,.section-copy,.section-image').forEach(el=>{
  el.classList.add('reveal'); observer.observe(el);
});
