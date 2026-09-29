export function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

export function opportunityCard(item, registeredIds = []) {
  const card = element('article', 'opportunity-card');
  const art = element('div', 'card-art');
  art.append(element('span', 'card-icon', item.icon), element('span', 'category-tag', item.category));
  const body = element('div', 'card-body');
  body.append(element('h3', '', item.title), element('p', 'card-description', item.description));
  const details = element('ul', 'card-details');
  details.append(element('li', '', `⌖  ${item.place}`), element('li', '', `◷  ${new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(`${item.date}T12:00:00`))} · ${item.time}`), element('li', '', `${item.vacancies} vagas disponíveis`));
  body.append(details);
  const action = element('button', 'button card-action', registeredIds.includes(item.id) ? 'Inscrição confirmada' : 'Quero participar');
  action.type = 'button'; action.dataset.action = 'register'; action.dataset.id = item.id; action.disabled = registeredIds.includes(item.id);
  card.append(art, body, action); return card;
}

export function renderHome(root, items, registrations) {
  const page = element('div', 'page page-home');
  const hero = element('section', 'hero'); hero.setAttribute('aria-labelledby', 'hero-title');
  const copy = element('div', 'hero-copy');
  copy.append(element('p', 'eyebrow', 'Juntos, fazemos a diferença'), element('h1', '', 'Um gesto seu pode transformar uma comunidade.'), element('p', 'hero-text', 'Encontre uma causa perto de você e participe de ações que tornam o bairro mais acolhedor.'), element('a', 'button', 'Encontrar oportunidades  →'));
  copy.lastChild.href = '#causas';
  const art = element('div', 'hero-art'); art.setAttribute('aria-hidden', 'true'); art.append(element('span', 'sun', '✳'), element('span', 'hero-heart', '♡'), element('span', 'hero-caption', 'Cuidar também é participar'));
  hero.append(copy, art); page.append(hero);
  const section = element('section', 'section-block'); section.id = 'causas'; section.setAttribute('aria-labelledby', 'causes-title');
  const heading = element('div', 'section-heading'); const title = element('h2', '', 'Causas que precisam de você por perto.'); title.id = 'causes-title'; heading.append(element('p', 'eyebrow', 'Encontre seu jeito de ajudar'), title, element('p', '', `${items.length} oportunidades abertas`)); section.append(heading);
  const grid = element('div', 'card-grid'); for (const item of items) grid.append(opportunityCard(item, registrations)); section.append(grid); page.append(section);
  const band = element('section', 'join-band'); band.append(element('div', '', '')); band.firstChild.append(element('p', 'eyebrow', 'Sua comunidade conta com você'), element('h2', '', 'Toda mudança começa com alguém.'), element('p', '', 'Escolha uma oportunidade e dê o próximo passo.'));
  const link = element('a', 'button button-light', 'Ver como participar  →'); link.href = '#participar'; band.append(link); page.append(band);
  root.replaceChildren(page);
}

export function renderRegistrations(root, items, registeredIds) {
  const page = element('section', 'section-block inner-page'); page.setAttribute('aria-labelledby', 'registrations-title');
  page.append(element('p', 'eyebrow', 'Seu próximo passo'));
  const title = element('h1', '', 'Minhas inscrições'); title.id = 'registrations-title'; page.append(title);
  const chosen = items.filter(item => registeredIds.includes(item.id));
  if (!chosen.length) page.append(element('p', 'empty-state', 'Você ainda não se inscreveu em uma oportunidade. Explore as causas e encontre uma que combine com você.'));
  else { const grid = element('div', 'card-grid'); chosen.forEach(item => grid.append(opportunityCard(item, registeredIds))); page.append(grid); }
  root.replaceChildren(page);
}

export function renderJoin(root) {
  const page = element('section', 'section-block inner-page join-page'); page.setAttribute('aria-labelledby', 'join-title');
  const text = element('div', 'join-copy'); text.append(element('p', 'eyebrow', 'Dê o próximo passo'), element('h1', '', 'Vamos encontrar seu jeito de ajudar?'), element('p', '', 'Escolha uma causa e veja as oportunidades abertas. Esta demonstração funciona localmente e não envia seus dados.'));
  const form = element('form', 'interest-form'); form.id = 'interest-form'; form.noValidate = true;
  form.append(field('Seu nome', 'name', 'text', 'Como podemos chamar você?'), field('Seu e-mail', 'email', 'email', 'voce@exemplo.com'));
  const group = element('div', 'form-field'); const label = element('label', '', 'Tenho interesse em'); label.htmlFor = 'cause'; const select = document.createElement('select'); select.id = 'cause'; select.name = 'cause'; select.required = true; select.setAttribute('aria-describedby', 'cause-error');
  const initial = document.createElement('option'); initial.value = ''; initial.textContent = 'Escolha uma causa'; select.append(initial);
  for (const option of ['Educação', 'Segurança alimentar', 'Meio ambiente']) { const o = document.createElement('option'); o.value = option; o.textContent = option; select.append(o); }
  group.append(label, select, errorNode('cause-error')); form.append(group);
  const submit = element('button', 'button', 'Ver oportunidades  →'); submit.type = 'submit'; form.append(submit);
  const status = element('p', 'form-status'); status.id = 'form-status'; status.setAttribute('aria-live', 'polite'); form.append(status);
  page.append(text, form); root.replaceChildren(page);
}

function field(labelText, name, type, placeholder) {
  const wrap = element('div', 'form-field'); const label = element('label', '', labelText); label.htmlFor = name;
  const input = document.createElement('input'); input.id = name; input.name = name; input.type = type; input.placeholder = placeholder; input.required = true; input.autocomplete = name === 'name' ? 'name' : 'email'; input.setAttribute('aria-describedby', `${name}-error`);
  wrap.append(label, input, errorNode(`${name}-error`)); return wrap;
}
function errorNode(id) { const node = element('small', 'field-error'); node.id = id; return node; }
