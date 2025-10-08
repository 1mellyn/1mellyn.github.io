const nes = [
  { title: "FCEUX ", image: "https://img.utdstc.com/icon/905/35a/90535a1f7b0ee571120e4a1a19067ab24b43b3702fe5870095bc7b689d575460:200", link: "https://fceux.com/web/home.html"},
  { title: "Mesen", image: "https://www.mesen.ca/images/blueRed48.png", link:"https://www.mesen.ca" },
  { title: "Retroarch", image: "retroarch.png", link: "https://www.retroarch.com" }
];


const nesList = document.getElementById("nes-list");

function renderNes(filter = "") {
  nesList.innerHTML = "";
  const filteredNes= nes.filter(nes => 
    nes.title.toLowerCase().includes(filter.toLowerCase())
  );

  filteredNes.forEach(nes => {
    const card = document.createElement("a");
    card.className = "nes-card";
    card.href = nes.link;"nes.html"


    card.innerHTML = `
      <img src="${nes.image}" alt="${nes.title}"></img>
      <h3>${nes.title}</h3>
      
    `;
    nesList.appendChild(card);
  });
}


document.getElementById("search").addEventListener("input", (e) => {
  renderNes(e.target.value);
});

renderNes();