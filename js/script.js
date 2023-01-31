document.getElementById("botaoEnviar").addEventListener("click",validaFormulario);

function validaFormulario() {

  if(document.getElementById("nome").value !== "" && document.getElementById("email").value !== "" || document.getElementById("telefone").value !== ""){
  alert("Prontinho! Você receberá as novidades por email, e se colocou o telefone receberá também por SMS.");
  }else{
  alert("Pleasee! Preencha os campos nome e email.");
  }
}

