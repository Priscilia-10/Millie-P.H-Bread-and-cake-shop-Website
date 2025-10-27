// Pengaktifan Menu Navbar Mobile
document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        // Toggle class 'fa-times' untuk ikon (X) dan 'fa-bars' (hamburger)
        menu.classList.toggle('fa-times');
        // Toggle class 'active' untuk menampilkan/menyembunyikan menu
        navbar.classList.toggle('active');
    }

    // Menghilangkan menu saat scroll atau klik link
    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
});

// Fungsi untuk menambah class animasi saat elemen masuk ke viewport
function checkVisibility() {
    const elements = document.querySelectorAll('.produk .box-container .box, .tentang .row .content, .tentang .row .image');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        // Cek jika elemen berada di dalam viewport (antara 0 dan tinggi jendela)
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
            // Gunakan animasi yang sama dengan hero section atau buat yang baru
            element.style.animation = 'fadeIn 1s ease-out forwards';
            element.style.opacity = 1; // Pastikan opacity menjadi 1 setelah animasi
        } else {
             // Opsional: reset opacity jika ingin animasi terulang saat scroll ke atas
             // element.style.opacity = 0; 
        }
    });
}

// Tambahkan event listener untuk memanggil fungsi saat scroll dan load
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Inisialisasi opacity untuk elemen yang akan dianimasikan saat scroll
document.addEventListener('DOMContentLoaded', () => {
    const scrollAnimatedElements = document.querySelectorAll('.produk .box-container .box, .tentang .row .content, .tentang .row .image');
    scrollAnimatedElements.forEach(element => {
        element.style.opacity = 0; // Sembunyikan elemen sebelum scroll
    });
    // Panggil checkVisibility di awal untuk elemen yang sudah di viewport
    checkVisibility();
});