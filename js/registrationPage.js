// get tahun
const tahun = document.querySelectorAll("[id=tahun]");
const year = new Date();
const getYear = year.getFullYear();

tahun.forEach((tahun) => {
  tahun.innerHTML = getYear;
});

document.querySelectorAll("#inputTanggal, #inputBulan").forEach((input) => {
  input.addEventListener("input", function () {
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
    }
  });
});
document.querySelectorAll("#inputTahun").forEach((input) => {
  input.addEventListener("input", function () {
    if (this.value.length > 4) {
      this.value = this.value.slice(0, 4);
    }
  });
});

function saveDataRegistration() {
  const registration = {
    noreg: document.getElementById("noreg").value,
    inputTanggal: document.getElementById("inputTanggal").value,
    inputBulan: document.getElementById("inputBulan").value,
    inputTahun: document.getElementById("inputTahun").value,
  };

  sessionStorage.setItem("registration", JSON.stringify(registration));
}
