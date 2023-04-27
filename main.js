document.addEventListener("DOMContentLoaded", function () {
  // definição do endereço da API
  const endpoint = "https://api.github.com/users/higorrsc";

  // tentativa de acesso à API
  fetch(endpoint)
    .then(function (resposta) {
      // retorno dos dados via API em formato JSON
      return resposta.json();
    })
    .then(function (json) {
      // captura dos elementos no HTML pelo id
      // const profileAvatar = document.getElementById("profileAvatar");
      // const profileName = document.getElementById("profileName");
      // const profileUserName = document.getElementById("profileUserName");
      // const profileRepositories = document.getElementById("profileRepositories");
      // const profileFollowers = document.getElementById("profileFollowers");
      // const profileFollowing = document.getElementById("profileFollowing");
      // const profileLink = document.getElementById("profileLink");

      // preenchimento dos elementos da página a partir do JSON retornado
      // profileAvatar.src = json.avatar_url;
      // profileName.innerHTML = json.name;
      // profileUserName.innerHTML = json.login;
      // profileRepositories.innerHTML = json.public_repos;
      // profileFollowers.innerHTML = json.followers;
      // profileFollowing.innerHTML = json.following;
      // profileLink.href = json.html_url;

      // preenchimento dos elementos da página a partir do JSON retornado
      document.getElementById("profileAvatar").src = json.avatar_url;
      document.getElementById("profileName").innerHTML = json.name;
      document.getElementById("profileUserName").innerHTML = json.login;
      document.getElementById("profileRepositories").innerHTML =
        json.public_repos;
      document.getElementById("profileFollowers").innerHTML = json.followers;
      document.getElementById("profileFollowing").innerHTML = json.following;
      document.getElementById("profileLink").href = json.html_url;
    })
    .catch(function (erro) {
      alert(
        "Ocorreu um erro ao buscar os dados no Github, tente novamente mais tarde."
      );
    });
});
