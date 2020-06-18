const buttonCekNomor = document.querySelector(".cek-nomor .buttonCek");

cekNomorHP = (string) => {
  const regEx = new RegExp(/^\d{10,12}$/);
  return regEx.test(string);
};

buttonCekNomor.addEventListener("click", () => {
  const cekNomor = document.getElementById("nomor").value;
  if (cekNomorHP(cekNomor)) {
    alert(`${cekNomor} Ini nomor anda!`);
  } else {
    alert("masukan 10-12 digit nomor anda");
  }
});