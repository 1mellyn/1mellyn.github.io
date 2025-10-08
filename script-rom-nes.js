const games = [
  { title: "Yume Penguin Monogatari", image: "https://upload.wikimedia.org/wikipedia/en/7/71/YumePenguinMonogatariBoxShotNES.jpg"},
  { title: "Super Mario Bros", image: "https://upload.wikimedia.org/wikipedia/pt/0/03/Super_Mario_Bros._box.png"},
  { title: "Metroid", image: "metroid.webp"},
  { title: "Rockin Kats", image: "https://upload.wikimedia.org/wikipedia/en/4/4b/Rockin_Kats_cover.jpg"},
  { title: "Kirby's Adventure", image: "https://upload.wikimedia.org/wikipedia/en/a/ae/Kirby%27s_Adventure_Coverart.png"},
];


const gameList = document.getElementById("game-list");

  function renderGames(filter = "") {
  gameList.innerHTML = "";
  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(filter.toLowerCase())
  );



  filteredGames.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";


    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <a href="${game.link}"><button class="download-btn">Download</button></a>
    `;
    gameList.appendChild(card);
  });
}


document.getElementById("search").addEventListener("input", (e) => {
  renderGames(e.target.value);
});

renderGames();

