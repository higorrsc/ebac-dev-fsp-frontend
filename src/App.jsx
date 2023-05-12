import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
    <>
      <Perfil nome='Higor Cruz' endereco='https://github.com/higorrsc.png'/>      
      {formularioEstaVisivel && (
        <Formulario />
      )}
      <button type="button" onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>toggle form</button>
    </>
  )
}

export default App
