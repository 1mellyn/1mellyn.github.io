const games = [
  { title: "Samurai Shodown V", image: "neogeo-samurai.jpg" },
  { title: "Neo Bomberman", image: "https://upload.wikimedia.org/wikipedia/en/d/dd/Neo_Bomberman_arcade_flyer.jpg" },
  { title: "Garou: Mark Of The Wolves", image: "https://m.media-amazon.com/images/M/MV5BNmM2OGEwMDItNzhjNy00MWJkLTljY2EtYTk3MjA5ZmM5ZWE1XkEyXkFqcGc@._V1_.jpg" },
  { title: "Sengoku III", image: "https://upload.wikimedia.org/wikipedia/en/4/40/Sengoku_3_arcade_flyer.jpg"},
  { title: "Magical Drop III", image: "https://images.squarespace-cdn.com/content/v1/5ec7efb9ebb412344d5488f7/1590471742143-ARMU2UBBAV5I61TP6FYR/image-asset.png"},
  { title: "Waku Waku 7", image: "https://upload.wikimedia.org/wikipedia/en/6/6e/Waku_Waku_7_arcade_flyer.jpg"},
]


const gameList = document.getElementById("game-list");

  function renderGames(filter = "") {
  gameList.innerHTML = "";
  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(filter.toLowerCase())
  );


    filteredGames.forEach(game => {
    const card = document.createElement("a");
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


