document.addEventListener('DOMContentLoaded', function() {
  // Animação scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { 
      if (e.isIntersecting) e.target.classList.add('visible'); 
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Máscara de telefone
  const tel = document.getElementById('telefone');
  if (tel) {
    tel.addEventListener('input', function() {
      let v = this.value.replace(/\D/g, '').slice(0, 11);
      if (v.length > 6) v = '(' + v.slice(0,2) + ') ' + v.slice(2,7) + '-' + v.slice(7);
      else if (v.length > 2) v = '(' + v.slice(0,2) + ') ' + v.slice(2);
      else if (v.length > 0) v = '(' + v;
      this.value = v;
    });
  }

  // Expose function globally for form onsubmit
  window.enviarLead = function(e) {
    e.preventDefault();
    const form = e.target;
    const nome = form.querySelector('input[type="text"]').value;
    const fone = form.querySelector('input[type="tel"]').value;
    const tipo = form.querySelectorAll('select')[0].value;
    const cidade = form.querySelectorAll('select')[1].value;
    
    const btn = document.getElementById('btnSubmit');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    const msg = encodeURIComponent(
      `Olá! Vim pelo site e gostaria de uma cotação.\n\n` +
      `👤 Nome: ${nome}\n` +
      `📱 WhatsApp: ${fone}\n` +
      `🏥 Tipo de plano: ${tipo}\n` +
      `📍 Cidade: ${cidade}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/5527995277207?text=${msg}`, '_blank');
      btn.textContent = 'Cotação enviada! ✓';
      btn.style.background = '#1B6B4A';
      form.reset();
    }, 600);
  };
});
