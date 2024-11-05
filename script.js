
// Toggling The sidebar
// Select elements
const menuIcon = document.getElementById('open-menu');
const closeIcon = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

// Show sidebar when clicking menu icon
menuIcon.addEventListener('click', () => {
    sidebar.classList.add('show');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'inline';
});

// Hide sidebar when clicking close icon
closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('show');
    menuIcon.style.display = 'inline';
    closeIcon.style.display = 'none';
});
