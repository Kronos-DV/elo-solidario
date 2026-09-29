export function bindEvents({ root, onRegister, onInterest, onRoute }) {
  document.addEventListener('click', event => {
    const routeLink = event.target.closest('a[href^="#"]');
    if (routeLink) { onRoute(routeLink.hash.slice(1)); document.querySelector('.main-nav')?.classList.remove('is-open'); document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false'); }
    const action = event.target.closest('[data-action="register"]');
    if (action) onRegister(action.dataset.id);
  });
  window.addEventListener('hashchange', () => onRoute(location.hash.slice(1) || 'inicio'));
  document.querySelector('.menu-toggle')?.addEventListener('click', event => {
    const button = event.currentTarget; const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded)); document.querySelector('.main-nav')?.classList.toggle('is-open', !expanded);
  });
  root.addEventListener('submit', event => {
    if (!event.target.matches('#interest-form')) return;
    event.preventDefault(); onInterest(event.target);
  });
  root.addEventListener('input', event => { if (event.target.matches('[aria-invalid="true"]')) event.target.removeAttribute('aria-invalid'); });
  root.addEventListener('click', event => { if (event.target.closest('a[href^="#"]')) document.querySelector('#app')?.focus({ preventScroll: true }); });
}
