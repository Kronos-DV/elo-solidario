const routes = new Set(['inicio', 'causas', 'minhas-inscricoes', 'participar']);
export function currentRoute() {
  const route = location.hash.replace(/^#/, '') || 'inicio';
  return routes.has(route) ? route : 'inicio';
}
export function navigate(route) { location.hash = routes.has(route) ? route : 'inicio'; }
