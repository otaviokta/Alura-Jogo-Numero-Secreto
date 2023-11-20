let listaNumerosSorteados = []
let limiteNumerosSorteados = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativasPrograma = 1

exibirMensagemIniciar()

function exibirTextoNaTela(tag, texto) {
  let campoPrograma = document.querySelector(tag)
  campoPrograma.innerHTML = texto
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", {
    rate: 1.2,
  })
}

function exibirMensagemIniciar() {
  exibirTextoNaTela("h1", "Jogo do Número Secreto")
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10")
}

function verificarChute() {
  let chute = document.querySelector("input").value
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou")
    let palavraTentativas =
      tentativasPrograma > 1 ? "tentativas!" : "tentativa!"
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativasPrograma} ${palavraTentativas}`
    exibirTextoNaTela("p", mensagemTentativas)
    document.getElementById("reiniciar").removeAttribute("disabled")
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor.")
    } else {
      exibirTextoNaTela("p", "O número secreto é maior.")
    }
    tentativasPrograma++
    limparCampo()
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * limiteNumerosSorteados + 1)
  let quantidadeDeElementosNaLista = listaNumerosSorteados.length

  if (quantidadeDeElementosNaLista == limiteNumerosSorteados) {
    listaNumerosSorteados = []
  }

  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio()
  } else {
    listaNumerosSorteados.push(numeroEscolhido)
    return numeroEscolhido
  }
}

function limparCampo() {
  chute = document.querySelector("input")
  chute.value = ""
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio()
  limparCampo()
  tentativasPrograma = 1
  exibirMensagemIniciar()
  document.getElementById("reiniciar").setAttribute("disabled", true)
}
