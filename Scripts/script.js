document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    const passInput = document.getElementById('passInput');
    const form = document.querySelector('form');

    if (toggleBtn && passInput) {
        toggleBtn.addEventListener('click', () => {
            const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passInput.setAttribute('type', type);
            toggleBtn.classList.toggle('fa-eye');
            toggleBtn.classList.toggle('fa-eye-slash');
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
        });
    }
});