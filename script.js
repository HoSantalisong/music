const TRACKS = [
  {
    id: "1",
    title: "Nepel Hobalena",
    artist: "Ho Santali",
    language: "Santali",
    category: "Traditional",
    duration: 200,
    cover: "Nepel_Hobalena.jpg"
  },
  {
    id: "2",
    title: "Aama Tangi Re",
    artist: "Ho Santali",
    language: "Santali",
    category: "Folk",
    duration: 220,
    cover: "Aama_Tangi_Re.jpg"
  }
];

const grid = document.querySelector("#grid");

function toMMSS(s) {
  return `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
}

function songHTML(t) {
  return `<div class="song">
    <img src="${t.cover}" alt="${t.title} cover"/>
    <div class="song-body">
      <a href="song${t.id}.html" class="song-title">${t.title}</a>
      <p class="song-artist">${t.artist}</p>
      <p class="song-meta">${t.language} • ${t.category} • ${toMMSS(t.duration)}</p>
    </div>
  </div>`;
}

function renderList() {
  grid.innerHTML = TRACKS.map(songHTML).join("");
}

// 🔍 Search
document.querySelector("#q").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = TRACKS.filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.artist.toLowerCase().includes(q) ||
    t.language.toLowerCase().includes(q)
  );
  grid.innerHTML = filtered.map(songHTML).join("");
});

document.getElementById("year").textContent = new Date().getFullYear();
renderList();
