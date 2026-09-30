const form = document.querySelector('#interest-form');
const status = document.querySelector('#form-status');

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const values = new FormData(form);
  const name = String(values.get('name')).trim();
  const cause = String(values.get('cause'));
  status.textContent = `Obrigado, ${name}. Esta demonstração não enviou seus dados. Você pode explorar oportunidades de ${cause} nas causas acima.`;
  status.focus();
});

form.addEventListener('input', () => {
  if (status.textContent) status.textContent = '';
});
