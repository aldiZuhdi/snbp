function saveDataUser() {
  const dataUser = {
    namaLengkap: document.getElementById("namaLengkap").value,
    nisn: document.getElementById("nisn").value,
    asalSekolah: document.getElementById("asalSekolah").value,
    kabupatenKota: document.getElementById("kabupatenKota").value,
    provinsi: document.getElementById("provinsi").value,
    universitas: document.getElementById("universitas").value,
    jurusan: document.getElementById("jurusan").value,
  };

  sessionStorage.setItem("dataUser", JSON.stringify(dataUser));
}
