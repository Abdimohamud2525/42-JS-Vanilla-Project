const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
async function getData(username) {
  try {
    const { data } = await axios(APIURL + username);

    createCardUser(data);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No user find");
    }
  }
}

function createCardUser(user) {
  const cardHTML = `
  <div class="card">
  <div>
    <img
      src="${user.avatar_url}"
      alt="${user.img}"
      class="avatar"
    />
  </div>
  <div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul>
      <li>${user.followers} <strong>Followers</strong></li>
      <li>${user.following}<strong>Following</strong></li>
      <li>${user.public_repos} <strong>oRepos</strng></li>
    </ul>

    <div id="repos"></div>
  </div>
</div>
    `;

  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>
`;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getData(user);

    search.value = "";
  }
});
