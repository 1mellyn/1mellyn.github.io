const emu = [
  { title: "Snes", image: "snes.png", link: "snes.html"},
  { title: "Neo Geo ", image: "neogeo.jpg", link: "neogeo.html"},
  { title: "Nes", image: "nes.jpg", link: "nes.html" },
  { title: "Gameboy", image: "gameboy.jpg", link: "gameboy.html" },
];


const emuList = document.getElementById("emu-list");

function renderEmu(filter = "") {
  emuList.innerHTML = "";
  const filteredEmu = emu.filter(emu => 
    emu.title.toLowerCase().includes(filter.toLowerCase())
  );

  filteredEmu.forEach(emu => {
    const card = document.createElement("a");
    card.className = "emu-card";
    card.href = emu.link;"teste.html"


    card.innerHTML = `
      <img src="${emu.image}" alt="${emu.title}"></img>
      <h3>${emu.title}</h3>
    `;
    emuList.appendChild(card);
  });
}


document.getElementById("search").addEventListener("input", (e) => {
  renderEmu(e.target.value);
});

renderEmu();