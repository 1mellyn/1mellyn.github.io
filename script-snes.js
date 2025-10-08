const snes = [
  { title: "Snes9x", image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/SNES9X_logo.png", link: "https://www.snes9x.com"},
  { title: "Zsnes", image: "zsnes.png", link:"https://www.zsnes.com" },
  { title: "Delta", image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Delta_Emulator_Logo.jpg",   },
  { title: "Retroarch", image: "retroarch.png", link: "https://www.retroarch.com" },
  { title: "Bsnes", image: "https://bsnes.org/wp-content/uploads/2023/03/bsnes-logo-png.png", link:"https://bsnes.org" },
];


const snesList = document.getElementById("snes-list");

function renderSnes(filter = "") {
  snesList.innerHTML = "";
  const filteredSnes= snes.filter(snes => 
    snes.title.toLowerCase().includes(filter.toLowerCase())
  );

  filteredSnes.forEach(snes => {
    const card = document.createElement("a");
    card.className = "snes-card";
    card.href = snes.link;"snes.html"


    card.innerHTML = `
      <img src="${snes.image}" alt="${snes.title}"></img>
      <h3>${snes.title}</h3>
      
    `;
    snesList.appendChild(card);
  });
}


document.getElementById("search").addEventListener("input", (e) => {
  renderSnes(e.target.value);
});

renderSnes();