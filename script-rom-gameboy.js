const games = [
  { title: "Pokémon Fire Red", image: "firered.jpg" },
  { title: "Pokémon Sapphire Version", image: "https://m.media-amazon.com/images/I/61p+1+PYSML.jpg"},
  { title: "Crash Bandicoot The Huge Adventure", image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Crashadven.png"},
  { title: "Sakura Card De Mini Game", image: "https://static.wikia.nocookie.net/ccs/images/5/55/Sakura_Card_de_Mini-Game_Cover.jpg/revision/latest?cb=20180916105354"},
  { title: "The Legend Of Zelda: Minish Cap ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzx3wxxqH2fO_i1eLc6DiS7sLbzujn1T831g&s"},
  { title: "Chobits: Atashi Dake No Hito ", image: "https://www.giantbomb.com/a/uploads/scale_medium/0/238/695193-chobits_gba.jpg"},
  { title: "Kirby Amazing Mirror ", image: "https://sm.ign.com/ign_br/cover/k/kirby-the-/kirby-the-amazing-mirror_5g4k.jpg"},
  { title: "Klonoa: Empire of Dreams ", image: "https://bdjogos.com.br/capas/13374-klonoa-empire-of-dreams-game-boy-advance-capa-1.jpg"},
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

