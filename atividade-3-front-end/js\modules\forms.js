const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function validateInterest(form) {
  const values = Object.fromEntries(new FormData(form).entries());
  const errors = {};
  if (values.name.trim().length < 3) errors.name = 'Informe seu nome com pelo menos 3 caracteres.';
  if (!emailPattern.test(values.email.trim())) errors.email = 'Digite um e-mail válido, como voce@exemplo.com.';
  if (!values.cause) errors.cause = 'Escolha uma causa para continuar.';
  for (const field of form.querySelectorAll('[name]')) {
    const message = errors[field.name] || '';
    field.setAttribute('aria-invalid', String(Boolean(message)));
    const hint = form.querySelector(`#${field.name}-error`);
    if (hint) hint.textContent = message;
  }
  const firstInvalid = form.querySelector('[aria-invalid="true"]');
  if (firstInvalid) firstInvalid.focus();
  return { valid: Object.keys(errors).length === 0, values, errors };
}
