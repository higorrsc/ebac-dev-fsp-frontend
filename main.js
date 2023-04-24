document.addEventListener("DOMContentLoaded", function () {
  // captura dos elementos no HTML pelo id
  const profileAvatar = document.getElementById("profileAvatar");
  const profileName = document.getElementById("profileName");
  const profileUserName = document.getElementById("profileUserName");
  const profileRepositories = document.getElementById("profileRepositories");
  const profileFollowers = document.getElementById("profileFollowers");
  const profileFollowing = document.getElementById("profileFollowing");
  const profileLink = document.getElementById("profileLink");

  // definição do endereço da API
  const endpoint = "https://api.github.com/users/higorrsc";

  // tentativa de acesso à API
  fetch(endpoint)
    .then(function (resposta) {
      // retorno dos dados via API em formato JSON
      return resposta.json();
    })
    .then(function (json) {
      // preenchimento dos elementos da página a partir do JSON retornado
      profileAvatar.src = json.avatar_url;
      profileName.innerHTML = json.name;
      profileUserName.innerHTML = json.login;
      profileRepositories.innerHTML = json.public_repos;
      profileFollowers.innerHTML = json.followers;
      profileFollowing.innerHTML = json.following;
      profileLink.href = json.html_url;
    });
});
