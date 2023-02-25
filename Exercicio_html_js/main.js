function validarFormulario() {
  const campoA = parseInt(document.getElementById("campoA").value);
  const campoB = parseInt(document.getElementById("campoB").value);

  if (campoB > campoA) {
    document.getElementById("mensagem").innerHTML =
      "Muito bem o formulário é válido!";
    document.getElementById("mensagem").style.color = "green";
    document.getElementById("mensagem").style.border = "1px solid green";
  } else {
    document.getElementById("mensagem").innerHTML = "Formulário inválido!";
    document.getElementById("mensagem").style.color = "red";
    document.getElementById("mensagem").style.border = "1px solid red";
  }
}
