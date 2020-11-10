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

window.addEventListener("load", function () {
  const form = document.getElementById("formulario");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
});

function verify(message) {
  if (message === "OK") {
    const content = document.getElementById("content");
    const successMessage = "<p>Su apoyo al manifiesto de Juristas por la Eutanasia se ha registrado con éxito. En las próximas horas revisaremos los datos que nos ha proporcionado e incorporaremos su nombre al listado de firmantes.</p><p>Gracias y un cordial saludo</p>"
    const alertDiv = document.createElement("div")
    alertDiv.classList.add("success");
    alertDiv.innerHTML = successMessage;
    content.prepend(alertDiv);

    function removeDiv() {
      alertDiv.style.opacity = '0';
    }
    setTimeout(removeDiv, 10000);
    alertDiv.addEventListener("transitionend", () => {
      alertDiv.remove()
    });
  } else {
    console.log("Algo ha fallado. Vuelva a intentarlo más tarde \n", message);
  }

}

function sendEmail() {
  let nameForm = document.getElementById("formName");
  let name = nameForm.value;
  let emailForm = document.getElementById("formEmail");
  let email = emailForm.value;
  let jobForm = document.getElementById("formJob");
  let job = jobForm.value;


  Email.send({
    SecureToken: "c73b0fa2-e892-4123-9b3a-be5ce3acfcb7",
    To: ['juristas@derechoamorir.org', `${email}`],
    From: "juristas@derechoamorir.org",
    Subject: `Juristas por la eutanasia`,
    Body: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/><title> Gracias por apoyar el manifiesto de juristas por la eutanasia</title><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head><h3>Gracias por apoyar el manifiesto de juristas por la eutanasia</h3><p>Hemos recibido sus datos en apoyo al manifiesto de juristas por la eutanasia. En las próximas horas revisaremos la información y le incluiremos en la lista de personas de firmantes.</p><p>Estos son los datos que hemos recibido. Si encuentra algún error póngase en contacto con nosotros para solventarlo</p><ul><li>Nombre: ${name}</li><li>Email: ${email}</li><li>Ocupación: ${job}</li></ul><br><br><p>Un cordial saludo y gracias por su apoyo</p><p><a style="color:rgb(179,15,29); text-decoration: none;" href="https://derechoamorir.org" target="_blank">Derecho a Morir Dignamente</a></p><br><br><p style="font-size: 0.9em; color: #444;">Si no ha firmado el manifiesto y ha recibido este email probablemente se debe a un error. Por favor responda a este correo para que no incorporemos sus datos a la lista de firmantes.</p></html>`
  }).then(
    message => verify(message)
  );
}