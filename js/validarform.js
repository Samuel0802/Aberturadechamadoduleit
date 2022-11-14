//VALIDAÇÃO DE NOME
var nomeProduto = document.querySelector('input[name=nome]');
nomeProduto.onkeyup = function () {
  var patterns = /[^a-z-ã-ç-A-Z- -]/g;
  var caretPos = this.selectionStart;

  this.value = nomeProduto.value.replace(patterns, '');
  this.setSelectionRange(caretPos, caretPos);
}

