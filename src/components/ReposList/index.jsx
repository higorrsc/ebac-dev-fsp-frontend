import { useEffect, useState } from "react";

const ReposList = () => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/higorrsc/repos")
      .then((res) => res.json())
      .then((resJSON) => {
        setTimeout(() => {
          setEstaCarregando(false);
          setRepos(resJSON);
        }, 3000);
      });
  }, []);

  return (
    <>
      {estaCarregando && <h1>Carregando...</h1>}
      <ul>
        {/* {repos.map((repositorio) => ( */}
        {repos.map(({ id, name, language, html_url }) => (
          <li key={id}>
            <b>Nome:</b> {name}
            <br />
            <b>Linguagem:</b> {language}
            <br />
            <a target="_blank" href={html_url}>
              Visitar no GitHub
            </a>
          </li>
        ))}
        <li>Repositório</li>
      </ul>
    </>
  );
};

export default ReposList;
