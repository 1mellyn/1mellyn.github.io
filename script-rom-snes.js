const games = [
  { title: "Super Mario World", image: "https://upload.wikimedia.org/wikipedia/pt/0/06/Super-Mario-World.jpg"},
  { title: "Donkey Kong Country", image: "https://upload.wikimedia.org/wikipedia/en/1/1a/Donkey_Kong_Country_SNES_cover.png"},
  { title: "Megaman X", image: "https://upload.wikimedia.org/wikipedia/pt/d/d9/Capa_Mega_Man_X.png"},
  { title: "Super Metroid", image: "https://upload.wikimedia.org/wikipedia/en/e/e4/Smetroidbox.jpg"},
  { title: "Kirby's Dream Land 3", image: "https://upload.wikimedia.org/wikipedia/en/5/56/Kdl3.png"},
  { title: "Lemmings", image: "https://m.media-amazon.com/images/I/91P-LKJg2pL.jpg"},
  { title: "Yoshi Island", image: "https://upload.wikimedia.org/wikipedia/pt/1/1e/Super_Mario_World_2_Yoshis_Island_capa.jpg"},
  { title: "EVO", image: "https://upload.wikimedia.org/wikipedia/en/d/d9/E.V.O._-_Search_for_Eden_Coverart.png"},
  { title: "CONTRA III", image: "https://upload.wikimedia.org/wikipedia/en/b/b1/Contra_III_game_cover.png" },
];

/* array/lista para jogos */

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

