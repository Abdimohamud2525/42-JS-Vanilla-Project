const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generalJoke();

// this is then method

jokeBtn.addEventListener("click", generalJoke);

// function generalJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((response) => response.json())
//     .then((data) => (jokeEl.innerHTML = data.joke));
// }

// async method

async function generalJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}
