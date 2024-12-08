/* Seleciona o botão e adiciona evento de clique */
const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
  /* Captura os valores dos inputs */
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  /* Validação */
  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  /*Cria o link para enviar a mensagem via email*/
  const mailtoLink = `mailto:mahkaminski@gmail.com`;

  /* Abre o cliente de email*/
  window.location.href = mailtoLink;
});
