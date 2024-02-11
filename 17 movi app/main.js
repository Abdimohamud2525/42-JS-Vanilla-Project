const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=140823acf04cd674dbff8edd743af160&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=140823acf04cd674dbff8edd743af160&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
getmovies(API_URL);

const main = document.getElementById("main");

async function getmovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showmovies(data.results);
}

function showmovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const moviesEl = document.createElement("div");
    moviesEl.classList.add("movie");
    moviesEl.innerHTML = ` <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>`;

    main.appendChild(moviesEl);
  });
}

function getClassByRate(vote_average) {
  if (vote_average >= 8) {
    return "green";
  } else if (vote_average >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getmovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});

console.log("hello");
console.log("hello");
console.log("hello");
