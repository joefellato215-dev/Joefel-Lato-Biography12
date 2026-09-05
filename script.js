const $=s=>document.querySelector(s);
const theme=$('#themeBtn'), menu=$('#menuBtn'), mobile=$('#mobileNav');
function applyTheme(t){document.body.classList.toggle('light',t==='light');theme.textContent=t==='light'?'☀':'☾';localStorage.setItem('joefel-theme',t)}
applyTheme(localStorage.getItem('joefel-theme')||'dark');
theme.onclick=()=>applyTheme(document.body.classList.contains('light')?'dark':'light');
menu.onclick=()=>{mobile.classList.toggle('open');menu.setAttribute('aria-expanded',mobile.classList.contains('open'))};
mobile.querySelectorAll('a').forEach(a=>a.onclick=()=>mobile.classList.remove('open'));
$('#year').textContent=new Date().getFullYear();
const top=$('#top');window.addEventListener('scroll',()=>top.classList.toggle('show',scrollY>500));top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
$('#form').onsubmit=e=>{e.preventDefault();const n=$('#name').value.trim(),em=$('#email').value.trim(),m=$('#message').value.trim();if(!n||!em||!m)return;$('#note').textContent='Opening your email app...';location.href=`mailto:joefellato215@gmail.com?subject=${encodeURIComponent('Portfolio message from '+n)}&body=${encodeURIComponent(m+'\n\nFrom: '+n+'\nEmail: '+em)}`};
