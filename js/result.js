const tahun = document.getElementById("tahun");
const date = new Date();
const year = date.getFullYear();

tahun.textContent = year;

// get data session storage
const dataUser = JSON.parse(sessionStorage.getItem("dataUser"));
const registration = JSON.parse(sessionStorage.getItem("registration"));

if (dataUser) {
  document.getElementById("nisn").textContent = dataUser.nisn || "tidak ada data";
  document.getElementById("noreg").textContent = registration.noreg || "tidak ada data";
  document.getElementById("namaLengkap").textContent = dataUser.namaLengkap || "tidak ada data";
  document.getElementById("jurusan").textContent = dataUser.jurusan || "tidak ada data";
  document.getElementById("universitas").textContent = dataUser.universitas || "tidak ada data";
  document.getElementById("inputTanggal").textContent = registration.inputTanggal || "null";
  document.getElementById("inputBulan").textContent = registration.inputBulan || "null";
  document.getElementById("inputTahun").textContent = registration.inputTahun || "null";
  document.getElementById("asalSekolah").textContent = dataUser.asalSekolah || "Tidak ada data";
  document.getElementById("kabupatenKota").textContent = dataUser.kabupatenKota || "tidak ada data";
  document.getElementById("provinsi").textContent = dataUser.provinsi || "tidak ada data";
}
