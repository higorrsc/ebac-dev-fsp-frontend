<script setup>
  const nome ='Higor Cruz'
  const meuObjeto = {
    nome: 'Higor',
    filmeFavorito: 'Avatar'
  }

  function dizOla(nome){
    return `${nome} diz oi!`
  }

  const enderecoDaImagemDoBatman = 'https://cdn.pixabay.com/photo/2021/02/04/18/40/batman-5982258_1280.png'
  const botaoEstaDesabilitado = false
</script>

<template>
  <h1>{{ nome }}</h1>
  <h2>{{ meuObjeto.filmeFavorito }}</h2>
  <h2>{{ dizOla('Thaís') }}</h2>
  <img :src="enderecoDaImagemDoBatman" alt="Batman">
  <button :disabled="botaoEstaDesabilitado">Enviar Mensagem</button>

</template>

<style scoped>
</style>
