// 1. Tombol Sembunyikan dan Tampilkan Paragraf
const btnToggle = document.getElementById("btnToggle");
const paragrafTarget = document.getElementById("paragrafTarget");

btnToggle.addEventListener("click", function() {
    paragrafTarget.classList.toggle("hidden");
    if (paragrafTarget.classList.contains("hidden")) {
        btnToggle.textContent = "Tampilkan Paragraf";
    } else {
        btnToggle.textContent = "Sembunyikan Paragraf";
    }
});


// 2. Penghitung Karakter Langsung (Live Input Counter)
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function() {
    jumlahKarakter.textContent = namaInput.value.length;
});


// 3. Event 'change' pada Dropdown Sesi Workshop
const pilihanSesi = document.getElementById("pilihanSesi");
const infoSesi = document.getElementById("infoSesi");

pilihanSesi.addEventListener("change", function() {
    if (pilihanSesi.value) {
        infoSesi.textContent = pilihanSesi.value;
        infoSesi.style.color = "#27ae60";
    } else {
        infoSesi.textContent = "-";
        infoSesi.style.color = "#666";
    }
});


// 4. Validasi Form Pendaftaran Workshop & Tombol Reset
const formWorkshop = document.getElementById("formWorkshop");
const pesanForm = document.getElementById("pesanForm");
const btnReset = document.getElementById("btnReset");

formWorkshop.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("namaLengkap").value.trim();
    const email = document.getElementById("emailWorkshop").value.trim();
    const sesi = pilihanSesi.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validasi nama minimal 3 karakter
    if (nama.length < 3) {
        pesanForm.textContent = "Nama lengkap minimal harus terdiri dari 3 karakter.";
        pesanForm.className = "pesan-feedback error";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Format email tidak valid (contoh: user@mail.com).";
        pesanForm.className = "pesan-feedback error";
    } else if (sesi === "") {
        pesanForm.textContent = "Silakan pilih salah satu sesi workshop terlebih dahulu.";
        pesanForm.className = "pesan-feedback error";
    } else {
        pesanForm.textContent = "Pendaftaran berhasil! Data Anda telah tercatat.";
        pesanForm.className = "pesan-feedback success";
    }
});

btnReset.addEventListener("click", function() {
    pesanForm.textContent = "";
    infoSesi.textContent = "-";
    infoSesi.style.color = "#666";
});


// 5. To-Do List dengan Tombol Hapus Satuan & Status Selesai
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function() {
    const teks = inputTugas.value.trim();
    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        pesanTugas.className = "pesan-feedback error";
        return;
    }

    pesanTugas.textContent = "";
    const item = document.createElement("li");
    const label = document.createElement("span");
    const divTombol = document.createElement("div");

    const btnSelesai = document.createElement("button");
    const btnHapus = document.createElement("button");

    label.textContent = teks;
    btnSelesai.type = "button";
    btnSelesai.textContent = "Selesai";
    btnSelesai.className = "btn-secondary";

    btnHapus.type = "button";
    btnHapus.textContent = "Hapus";
    btnHapus.className = "btn-danger";

    // Event Selesai
    btnSelesai.addEventListener("click", function() {
        item.classList.toggle("selesai");
        btnSelesai.textContent = item.classList.contains("selesai") ? "Batal" : "Selesai";
    });

    // Event Hapus Satuan
    btnHapus.addEventListener("click", function() {
        daftarTugas.removeChild(item);
        pesanTugas.textContent = "Tugas berhasil dihapus.";
        pesanTugas.className = "pesan-feedback success";
    });

    divTombol.append(btnSelesai, btnHapus);
    item.append(label, divTombol);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    inputTugas.focus();
});