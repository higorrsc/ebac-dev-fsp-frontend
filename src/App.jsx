import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
    <>
      <Perfil nome='Higor Cruz' endereco='https://github.com/higorrsc.png'/>      
      <ReposList />
      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      <button type="button" onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>toggle form</button> */}
    </>
  )
}

export default App
