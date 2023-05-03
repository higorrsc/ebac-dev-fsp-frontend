<script setup>
import { reactive } from 'vue';

const nome = 'Higor Cruz'
const meuObjeto = {
  nome: 'Higor',
  filmeFavorito: 'Avatar'
}

function dizOla(nome) {
  return `${nome} diz oi!`
}

const imagemBatman = 'https://pixabay.com/get/g6b9b24effe400122b78560e1b904a47aca5614db6abd981f39ac00d51c9bf6c25736d1aaa2d5093de2c61fda498b5a23c197e3c70f05612e8103022fef7827520d2c8ef41c7ca3050b8f765474691633_640.png'
const imagemSuperman = 'https://pixabay.com/get/g6c6bd75e41220de5bed968ed34c7834a1f864d790198128f16179001730ae63fe7705cdf287c6c5e1f9e1b9a1246f3074ece20940ecf0a054f71d607717f9aeddab95a70c068fa0f96398172ca7a63d4_640.png'
const botaoEstaDesabilitado = false

const gostaDoBatman = false
const gostaDoSuperman = false

const estaAutorizado = false

// let contador = 0
const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
  nomes: ['higor', 'paulo', 'luiza', 'mônica'],
  nomeInserir: '',
})
function incrementar() {
  estado.contador++;
}
function decrementar() {
  estado.contador--;
}
function alteraEmail(evento) {
  estado.email = evento.target.value
}
function mostraSaldoFuturo() {
  const { saldo, transferindo } = estado;
  return saldo - transferindo;
}
function validaValorTransferencia() {
  const { saldo, transferindo } = estado;
  return saldo >= transferindo;
}
function cadastrarNome() {
  if (estado.nomeInserir.length >= 3) {
    estado.nomes.push(estado.nomeInserir);
  } else {
    alert('Digite mais caracteres');
  }
}

</script>

<template>
  <h1>{{ nome }}</h1>
  <h2>{{ meuObjeto.filmeFavorito }}</h2>
  <h2>{{ dizOla('Thaís') }}</h2>

  <img v-if="gostaDoBatman" :src="imagemBatman" alt="Batman">
  <img v-else-if="gostaDoSuperman" :src="imagemSuperman" alt="">
  <h2 v-else>Não curte heróis da DC</h2>

  <h1 v-if="estaAutorizado">Bem-vindo</h1>
  <h1 v-else>Não possui acesso</h1>

  <button :disabled="botaoEstaDesabilitado">Enviar Mensagem</button>

  <br>
  <hr>

  {{ estado.contador }}
  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br>
  <hr>

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail" name="txtEmail" id="txtEmail">

  <br>
  <hr>

  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }} <br>
  Saldo depois da transferência: {{ mostraSaldoFuturo() }} <br>
  <input type="number" name="" id="" placeholder="Quantia para transferir" class="campo"
    :class="{ invalido: !validaValorTransferencia() }" @keyup="evento => estado.transferindo = evento.target.value">
  <button v-if="validaValorTransferencia()">Transferir</button>
  <span v-else>Valor maior que o saldo</span>

  <br>
  <hr>

  <ul>
    <li v-for="nome in estado.nomes"> {{ nome }}</li>
  </ul>
  <input type="text" name="" id="" placeholder="Digite um novo nome"
    @keyup="evento => estado.nomeInserir = evento.target.value">
  <button type="button" @click="cadastrarNome">Cadastrar nome</button>
  <h3 v-for="nome in estado.nomes"> {{ nome }}</h3>
</template>

<style scoped>
img {
  max-width: 200px;
}

.invalido {
  outline-color: red;
  border-color: red;
}

.campo {
  border: 2px solid #000;
}
</style>
