const gameboy = [
  { title: "MGBA", image: "https://mgba.io/mgba-256.png", link: "https://mgba.io/"},
  { title: "Visual Boy Advance", image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/VisualBoyAdvance.png", link:"https://visualboyadvance.org" },
  { title: "Delta", image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Delta_Emulator_Logo.jpg", link:"https://faq.deltaemulator.com"  },
  { title: "Retroarch", image: "retroarch.png", link: "https://www.retroarch.com" },
  { title: "Sameboy", image: "https://dashboard.snapcraft.io/site_media/appmedia/2020/03/sameboy.png", link:"https://sameboy.github.io" },
];


const gameboyList = document.getElementById("gameboy-list");

function renderGameboy(filter = "") {
  gameboyList.innerHTML = "";
  const filteredGameboy= gameboy.filter(gameboy => 
    gameboy.title.toLowerCase().includes(filter.toLowerCase())
  );

  filteredGameboy.forEach(gameboy => {
    const card = document.createElement("a");
    card.className = "gameboy-card";
    card.href = gameboy.link;"gameboy.html"


    card.innerHTML = `
      <img src="${gameboy.image}" alt="${gameboy.title}"></img>
      <h3>${gameboy.title}</h3>
      
    `;
    gameboyList.appendChild(card);
  });
}


document.getElementById("search").addEventListener("input", (e) => {
  renderGameboy(e.target.value);
});

renderGameboy();