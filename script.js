const menu = document.getElementById("menu");
const navbar = document.getElementById("navlink");
const navLink = document.querySelectorAll(".navlink");

menu.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    navbar.classList.toggle("show");
  });
}

// jam
function updateJam() {
  const now = new Date();
  const jam = String(now.getHours()).padStart(2, "0");
  const menit = String(now.getMinutes()).padStart(2, "0");
  const detik = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("jam").textContent = `${jam}:${menit}:${detik}`;
}

setInterval(updateJam, 1000);
updateJam(); // panggil sekali untuk menampilkan jam segera

// send whatsapp
function sendMessageToWhatsapp() {
  const urlToWhatsapp = `https://wa.me/6285708743815?text=Hallo, Nama Saya ${nama.value}, ${pesan.value}`;
  window.open(urlToWhatsapp, "_blank");
}
