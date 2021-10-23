const linksSocialMedia = {
  github: 'naomy19',
  youtube: 'camillanaomy',
  facebook: 'camillanaomy',
  instagram: 'camillanaomy',
  twitter: 'cami95_'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url) //primeira resposta
    .then(response => response.json()) //transforma o que recebeu em json
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    }) //pega infos do json
}

getGitHubProfileInfos()
