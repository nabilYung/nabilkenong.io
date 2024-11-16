// Tangkap form
const form = document.getElementById('contact-form');

// Tambahkan event listener untuk submit form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman
    alert('Form berhasil dikirim!');
    form.reset(); // Mengosongkan form
});
