(function(){
  const btn = document.querySelector('.hamburger');
  const drawer = document.getElementById('drawer');
  if(btn && drawer){
    btn.addEventListener('click', ()=>{
      const open = drawer.classList.toggle('show');
      if(open){ drawer.removeAttribute('hidden'); } else { drawer.setAttribute('hidden',''); }
      btn.setAttribute('aria-expanded', String(open));
    });
  }
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
})();