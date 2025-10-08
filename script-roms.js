const roms = [
  { title: "Snes", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/SNES_logo.svg/1280px-SNES_logo.svg.png", link: "nintendosnes.html"},
  { title: "Nes", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/NES_logo.svg/1280px-NES_logo.svg.png", link:"nintendones.html" },
  { title: "Neo Geo", image: "https://download.logo.wine/logo/Neo_Geo_(system)/Neo_Geo_(system)-Logo.wine.png", link:"segageo.html"  },
  { title: "Gameboy", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Nintendo_Game_Boy_Logo.svg/1200px-Nintendo_Game_Boy_Logo.svg.png", link:"nintendogameboy.html"  },
];


const romsList = document.getElementById("roms-list");

function renderRoms(filter = "") {
  romsList.innerHTML = "";
  const filteredRoms= roms.filter(roms => 
    roms.title.toLowerCase().includes(filter.toLowerCase())
  );

  filteredRoms.forEach(roms => {
    const card = document.createElement("a");
    card.className = "roms-card";
    card.href = roms.link;"roms.html"


    card.innerHTML = `
      <img src="${roms.image}" alt="${roms.title}"></img>
      <h3>${roms.title}</h3>
      
    `;
    romsList.appendChild(card);
  });
}


document.getElementById("search").addEventListener("input", (e) => {
  renderRoms(e.target.value);
});

renderRoms();