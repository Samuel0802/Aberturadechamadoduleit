function abrirWhatsapp() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var setor = document.getElementById("setor").value;
  let suporte = document.getElementById("suporte").value;
  var msg = document.getElementById("msg").value;
  var url = "https://wa.me/5592984005764?text=" // Seu numero
    + "*Abertura de Chamado Duleit.*" + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "*Nome*: " + nome + "%0a" // Dados do formulário
    + "*E-mail*: " + email + "%0a"
	 + "*Setor*: " + setor + "%0a"
	 + "*Tipo de Suporte*: " + suporte + "%0a"
   + "*Mensagem*: " + msg;
  window.open(url, '_blank').focus();
}

