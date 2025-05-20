// script.js

// 1. Exemplo de Manipulação de DOM

// Função que altera o conteúdo de um elemento com id "mensagem"
function mostrarMensagem() {
  const elemento = document.getElementById("mensagem");
  elemento.innerText = "Olá, bem-vindo ao tutorial de JavaScript!";
}

// 2. Exemplo de Manipulação de Eventos

// Função que altera a cor do texto do botão ao clicar
function alterarCorBotao() {
  const botao = document.getElementById("btnClique");
  botao.style.backgroundColor = "green"; // Altera a cor de fundo do botão
  botao.style.color = "white"; // Altera a cor do texto do botão
}

// 3. Exemplo de Função para Contar o Número de Caracteres de um Texto

function contarCaracteres() {
  const input = document.getElementById("textoInput");
  const contador = document.getElementById("contador");
  contador.innerText = `Número de caracteres: ${input.value.length}`;
}

// 4. Exemplo de Função de Validação de Formulário

// Função que valida se o nome foi preenchido corretamente
function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const resultado = document.getElementById("resultadoValidador");

  if (nome.trim() === "") {
    resultado.innerText = "Por favor, insira seu nome!";
    resultado.style.color = "red";
  } else {
    resultado.innerText = `Olá, ${nome}! Seu formulário foi enviado com sucesso.`;
    resultado.style.color = "green";
  }
}

// 5. Adicionando Evento de Clique ao Botão de Enviar
document
  .getElementById("btnEnviar")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Impede o envio do formulário de forma padrão
    validarFormulario(); // Valida o formulário ao clicar no botão
  });

// 6. Função de Exemplo para Calcular o Fatorial de um Número

function calcularFatorial() {
  const numero = parseInt(document.getElementById("numeroFatorial").value);
  let resultado = 1;

  if (numero >= 0) {
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
    document.getElementById(
      "resultadoFatorial"
    ).innerText = `Fatorial de ${numero} é ${resultado}`;
  } else {
    document.getElementById("resultadoFatorial").innerText =
      "Por favor, insira um número positivo.";
  }
}

// 7. Função de Exemplo para Fazer uma Calculadora Simples

function somar() {
  const numero1 = parseFloat(document.getElementById("num1").value);
  const numero2 = parseFloat(document.getElementById("num2").value);
  const resultadoCalculadora = numero1 + numero2;
  document.getElementById(
    "resultadoCalculadora"
  ).innerText = `Resultado: ${resultadoCalculadora}`;
}

function subtrair() {
  const numero1 = parseFloat(document.getElementById("num1").value);
  const numero2 = parseFloat(document.getElementById("num2").value);
  const resultadoCalculadora = numero1 - numero2;
  document.getElementById(
    "resultadoCalculadora"
  ).innerText = `Resultado: ${resultadoCalculadora}`;
}

function multiplicar() {
  const numero1 = parseFloat(document.getElementById("num1").value);
  const numero2 = parseFloat(document.getElementById("num2").value);
  const resultadoCalculadora = numero1 * numero2;
  document.getElementById(
    "resultadoCalculadora"
  ).innerText = `Resultado: ${resultadoCalculadora}`;
}

function dividir() {
  const numero1 = parseFloat(document.getElementById("num1").value);
  const numero2 = parseFloat(document.getElementById("num2").value);
  if (numero2 === 0) {
    document.getElementById("resultadoCalculadora").innerText =
      "Erro: Não é possível dividir por zero!";
  } else {
    const resultadoCalculadora = numero1 / numero2;
    document.getElementById(
      "resultadoCalculadora"
    ).innerText = `Resultado: ${resultadoCalculadora}`;
  }
}

// 8. Adicionando eventos aos botões da calculadora
document.getElementById("btnSomar").addEventListener("click", somar);
document.getElementById("btnSubtrair").addEventListener("click", subtrair);
document
  .getElementById("btnMultiplicar")
  .addEventListener("click", multiplicar);
document.getElementById("btnDividir").addEventListener("click", dividir);
