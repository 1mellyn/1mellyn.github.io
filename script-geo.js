const geo = [
  { title: "FB Neo", image: "fbneo.svg", link: "https://github.com/finalburnneo/FBNeo"},
  { title: "Kawaks", image: "https://static.wikia.nocookie.net/emulation-general/images/9/96/Kawaks.png/revision/latest?cb=20130828204750", link:"https://www.winkawaks.org" },
  { title: "Neo Rage X", image: "neorage.png", link:"https://www.neofighters.info"  },
];


const geoList = document.getElementById("geo-list");

function renderGeo(filter = "") {
  geoList.innerHTML = "";
  const filteredGeo= geo.filter(geo => 
    geo.title.toLowerCase().includes(filter.toLowerCase())
  );

  filteredGeo.forEach(geo => {
    const card = document.createElement("a");
    card.className = "geo-card";
    card.href = geo.link;"geo.html"


    card.innerHTML = `
      <img src="${geo.image}" alt="${geo.title}"></img>
      <h3>${geo.title}</h3>
      
    `;
    geoList.appendChild(card);
  });
}


document.getElementById("search").addEventListener("input", (e) => {
  renderGeo(e.target.value);
});

renderGeo();