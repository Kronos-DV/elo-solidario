import { getOpportunities, getRegistrations, saveRegistrations } from './modules/storage.js';
import { currentRoute, navigate } from './modules/router.js';
import { renderHome, renderRegistrations, renderJoin } from './modules/templates.js';
import { validateInterest } from './modules/forms.js';
import { bindEvents } from './modules/events.js';

const root = document.querySelector('#app');
const opportunities = getOpportunities();
let registrations = getRegistrations();

function render(route = currentRoute()) {
  const normalized = ['inicio', 'causas'].includes(route) ? 'inicio' : route;
  if (normalized === 'minhas-inscricoes') renderRegistrations(root, opportunities, registrations);
  else if (normalized === 'participar') renderJoin(root);
  else renderHome(root, opportunities, registrations);
  document.title = `${normalized === 'inicio' ? 'Oportunidades' : normalized === 'minhas-inscricoes' ? 'Minhas inscrições' : 'Participar'} — Rede Solidária`;
  document.querySelectorAll('[data-nav]').forEach(link => link.setAttribute('aria-current', link.hash === `#${route}` || (route === 'inicio' && link.hash === '#causas') ? 'page' : 'false'));
}

function register(id) {
  if (!opportunities.some(item => item.id === id) || registrations.includes(id)) return;
  registrations = [...registrations, id];
  try { saveRegistrations(registrations); }
  catch { registrations = registrations.filter(value => value !== id); statusMessage('Não foi possível salvar neste navegador. Verifique o espaço disponível e tente novamente.'); render(currentRoute()); return; }
  render(currentRoute()); statusMessage('Inscrição salva neste navegador. Nenhum dado foi enviado.');
}

function submitInterest(form) {
  const result = validateInterest(form); const status = form.querySelector('#form-status');
  if (!result.valid) { status.textContent = 'Revise os campos indicados para continuar.'; return; }
  const message = `Obrigado, ${result.values.name.trim()}! Veja as oportunidades de ${result.values.cause}.`;
  status.textContent = message; statusMessage(message); navigate('causas');
}

function statusMessage(message) {
  let status = document.querySelector('#global-status');
  if (!status) { status = document.createElement('p'); status.id = 'global-status'; status.className = 'sr-only'; status.setAttribute('role', 'status'); document.body.append(status); }
  status.textContent = message;
}

render();
bindEvents({ root, onRegister: register, onInterest: submitInterest, onRoute: route => render(route) });
