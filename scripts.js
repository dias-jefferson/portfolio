function enviarWhats(event) {
    event.preventDefault()

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("menssagem").value;
  const telefone = "5511969072816";

  const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  //const url = `https://wa.me/${telefone}/?text=${msgFormatada}`;
  const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`;

  window.open(url, "_blank");
}
 