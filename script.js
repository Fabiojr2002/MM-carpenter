  function openMobile(){document.getElementById('mobileMenu').classList.add('open')}
  function closeMobile(){document.getElementById('mobileMenu').classList.remove('open')}
  function handleSubmit(e){
    e.preventDefault();
    const btn=e.target.querySelector('.form-submit');
    btn.textContent='Mensagem enviada!';
    btn.style.background='#3B6B2A';
    setTimeout(()=>{btn.textContent='Enviar mensagem';btn.style.background='';e.target.reset()},3000);
  }
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const t=document.querySelector(a.getAttribute('href'));
      if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}
    });
  });
