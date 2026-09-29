const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation?.classList.toggle('is-open', !isOpen);
  menuToggle.querySelector('[aria-hidden="true"]').textContent = isOpen ? '☰' : '×';
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    const icon = menuToggle?.querySelector('[aria-hidden="true"]');
    if (icon) icon.textContent = '☰';
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const dropdownButton = document.querySelector('.nav-dropdown');
const dropdownPanel = document.querySelector('#causes-menu');
dropdownButton?.addEventListener('click', () => {
  const isOpen = dropdownButton.getAttribute('aria-expanded') === 'true';
  dropdownButton.setAttribute('aria-expanded', String(!isOpen));
  dropdownPanel?.classList.toggle('is-open', !isOpen);
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-group')) {
    dropdownButton?.setAttribute('aria-expanded', 'false');
    dropdownPanel?.classList.remove('is-open');
  }
});

const volunteerForm = document.querySelector('#volunteer-form');
const formFeedback = document.querySelector('#form-feedback');
volunteerForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!volunteerForm.reportValidity()) return;
  formFeedback.textContent = 'Obrigado pelo interesse! Esta demonstração não envia seus dados.';
  formFeedback.classList.add('is-visible');
  volunteerForm.reset();
});

const infoDialog = document.querySelector('#info-dialog');
document.querySelector('#privacy-info')?.addEventListener('click', () => infoDialog?.showModal());
document.querySelector('.dialog-close')?.addEventListener('click', () => infoDialog?.close());
document.querySelector('.dialog-ok')?.addEventListener('click', () => infoDialog?.close());
infoDialog?.addEventListener('click', (event) => {
  if (event.target === infoDialog) infoDialog.close();
});

