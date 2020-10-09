const manifiestoLink = document.getElementById("manifiestoLink");
const firmantesLink = document.getElementById("firmantesLink");
const firmaLink = document.getElementById("firmaLink");

function showManifiesto() {
  const manifiesto = document.getElementById("manifiesto");
  const firmantes = document.getElementById("firmantes");
  const firma = document.getElementById("firma");
  manifiesto.classList.remove("inv");
  firmantes.classList.add("inv");
  firma.classList.add("inv");
}

function showFirmantes() {
  const manifiesto = document.getElementById("manifiesto");
  const firmantes = document.getElementById("firmantes");
  const firma = document.getElementById("firma");
  manifiesto.classList.add("inv");
  firma.classList.add("inv");
  firmantes.classList.remove("inv");
}

function showFirma() {
  const manifiesto = document.getElementById("manifiesto");
  const firmantes = document.getElementById("firmantes");
  const firma = document.getElementById("firma");
  manifiesto.classList.add("inv");
  firma.classList.remove("inv");
  firmantes.classList.add("inv");
}

manifiestoLink.addEventListener("click", showManifiesto, false);
firmantesLink.addEventListener("click", showFirmantes, false);
firmaLink.addEventListener("click", showFirma, false);