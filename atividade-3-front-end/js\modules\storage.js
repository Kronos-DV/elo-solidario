const KEYS = Object.freeze({ opportunities: 'rede-solidaria:v2:oportunidades', registrations: 'rede-solidaria:v2:inscricoes' });

const seed = [
  { id: 'reforco-escolar', category: 'Educação', title: 'Reforço escolar em grupo', place: 'Centro Comunitário Aurora', date: '2026-10-10', time: '09:00', vacancies: 8, icon: '✎', description: 'Compartilhe conhecimento e ajude crianças a descobrirem novas possibilidades.' },
  { id: 'horta-bairro', category: 'Meio ambiente', title: 'Mutirão da horta do bairro', place: 'Praça das Mangueiras', date: '2026-10-12', time: '08:30', vacancies: 12, icon: '✿', description: 'Plante, cuide e transforme um espaço compartilhado da comunidade.' },
  { id: 'cozinha-comunitaria', category: 'Segurança alimentar', title: 'Cozinha comunitária', place: 'Casa Aberta', date: '2026-10-17', time: '10:00', vacancies: 6, icon: '♡', description: 'Ajude a preparar refeições e fortalecer uma rede de cuidado local.' }
];

function read(key, fallback) {
  try { const value = JSON.parse(localStorage.getItem(key)); return Array.isArray(value) ? value : fallback; }
  catch { return fallback; }
}
export function getOpportunities() { return read(KEYS.opportunities, seed); }
export function getRegistrations() { return read(KEYS.registrations, []); }
export function saveRegistrations(items) { localStorage.setItem(KEYS.registrations, JSON.stringify(items)); }
