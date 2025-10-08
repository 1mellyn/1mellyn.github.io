const games = [
  { title: "Pokémon Fire Red", image: "firered.jpg" },
  { title: "Super Mario World", image: "https://upload.wikimedia.org/wikipedia/pt/0/06/Super-Mario-World.jpg" },
  { title: "The Legend of Zelda", image: "https://upload.wikimedia.org/wikipedia/pt/3/31/The_Legenda_of_Zelda_A_Link_to_the_Past_capa.png" },
  { title: "Donkey Kong Country", image: "https://upload.wikimedia.org/wikipedia/en/1/1a/Donkey_Kong_Country_SNES_cover.png" },
  { title: "Magical Drop III", image: "https://images.squarespace-cdn.com/content/v1/5ec7efb9ebb412344d5488f7/1590471742143-ARMU2UBBAV5I61TP6FYR/image-asset.png" },
  { title: "Megaman X", image: "https://upload.wikimedia.org/wikipedia/pt/d/d9/Capa_Mega_Man_X.png" },
  { title: "Super Metroid", image: "https://upload.wikimedia.org/wikipedia/en/e/e4/Smetroidbox.jpg" },
  { title: "Kirby's Dream Land", image: "https://upload.wikimedia.org/wikipedia/pt/b/bf/Kirbysdreamland.jpg" },
  { title: "Kirby's Dream Land 3", image: "https://upload.wikimedia.org/wikipedia/en/5/56/Kdl3.png" },
  { title: "Lemmings", image: "https://m.media-amazon.com/images/I/91P-LKJg2pL.jpg" },
  { title: "Pokémon Sapphire Version", image: "https://m.media-amazon.com/images/I/61p+1+PYSML.jpg" },
  { title: "Crash Bandicoot The Huge Adventure", image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Crashadven.png" },
  { title: "Crash Bandicoot N. Sane Trilogy ", image: "https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000002090/ecfc64f339579b17ed8d12d5bdb4acd0cad2811cb2ff7dd0a02ce7e512c2d26a" },
  { title: "Samurai Shodown ", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCEFklfpoEKNQUWk_lYSsIYbrDk0C-_Z-DqgJldiJD3guPoNdh22q8bPFyXuUJMdTnsTrRNEykDtdubfL5JVRUYgaGtr4uLw7cmmGqvMJW-C07hJY2RkXot95ZKbj6otUGtuFxKbYDEO0X39PjgyyjtR-HualcKsNjDIfm22lR1tgpFRJifiL2jGZzuK0/w640-h512-rw/ss.jpg" },
];

/* array/lista para jogos */

const gameList = document.getElementById("game-list");

/* ligando o html com o javascript, link de jogos aparecendo*/

/*se estiver vazio, mostrará todos os jogos*/function renderGames(filter = "") {
  gameList.innerHTML = "";
  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(filter.toLowerCase())
  );


  /*para os jogos, cria uma div*/
  filteredGames.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";


    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <button class="download-btn">Download</button>
    `;
    gameList.appendChild(card);
  });
}

/*quando o usuario digitar alguma coisa, será mostrado o que foi digitado */

document.getElementById("search").addEventListener("input", (e) => {
  renderGames(e.target.value);
});

renderGames();

