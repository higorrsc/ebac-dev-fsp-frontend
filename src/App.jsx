function App() {
  const nome = 'Higor';

  function retornaNome() {
    return nome;
  }

  const pessoa = {
    nome: 'Maria'
  }

  let estaDeDia = true;

  return (
    <>
      <h1>Olá, {retornaNome()}</h1>
      <h2>Olá, {pessoa.nome} </h2>
      {estaDeDia ? 'Bom dia' : 'Boa tarde'}
      {estaDeDia && 'Bom dia novamente'}
    </>
  )
}

export default App
