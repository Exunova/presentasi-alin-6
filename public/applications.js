(() => {
  const topics = [
    ["concept-metric-negative", "Untuk Apa Hasil Kali Dalam?", [
      ["light", "Renderer 3D: hasil kali dalam normal permukaan dan arah cahaya menentukan terang permukaan."],
      ["search", "Pencarian dokumen: hasil kali dalam vektor yang dinormalisasi menentukan skor kemiripan."],
      ["vision", "Game: hasil kali dalam arah pandang NPC dan arah target memeriksa bidang pandang."],
    ]],
    ["6", "Untuk Apa Norm?", [
      ["distance", "Game: norm selisih posisi menghitung jarak pemain ke objek."],
      ["speed", "Simulasi gerak: norm vektor kecepatan memberikan kelajuan objek."],
      ["error", "Optimisasi model: norm vektor galat mengukur besar kesalahan prediksi."],
    ]],
  ];
  for (const [after, title, examples] of topics) {
    const anchor = document.querySelector(`[data-scene="${after}"]`);
    if (!anchor) continue;
    const section = document.createElement("section");
    section.className = "slide slide--applications";
    section.dataset.title = title;
    const inner = document.createElement("div");
    inner.className = "slide__inner";
    const h = document.createElement("h2");
    h.textContent = title;
    inner.append(h);
    const grid = document.createElement("div");
    grid.className = "application-cards";
    examples.forEach(([name, description]) => {
      const card = document.createElement("figure");
      card.className = `application-card app-${name}`;
      const media = document.createElement("div");
      media.className = "application-image";
      const img = document.createElement("img");
      img.src = `assets/applications/capture-${name}.png`;
      img.alt = `Tangkapan layar demonstrasi perangkat lunak: ${description}`;
      media.append(img);
      const caption = document.createElement("figcaption");
      caption.textContent = description;
      card.append(media, caption);
      grid.append(card);
    });
    inner.append(grid);
    section.append(inner);
    anchor.after(section);
  }
  [...document.querySelectorAll(".slide")].forEach((slide, i) =>
    slide.dataset.chapter = `Bab VI / ${String(i + 1).padStart(2, "0")}`
  );
})();
