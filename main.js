const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const body = document.body;

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  body.classList.toggle('sidebar-open');
});

function toggleSidebar() {
  sidebar.classList.remove('open');
  body.classList.remove('sidebar-open');
}
