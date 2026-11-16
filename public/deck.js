// Navigasi presentasi: papan ketik, tombol, geser, dan daftar isi.
const slides = Array.from(document.querySelectorAll(".slide"));
const fill = document.querySelector(".hud__fill");
const count = document.querySelector(".hud__count");
const toc = document.querySelector(".toc");
const tocGrid = document.querySelector(".toc__grid");

let current = 0;

function tampilkan(index) {
  current = Math.max(0, Math.min(index, slides.length - 1));
  slides.forEach((slide, i) => slide.classList.toggle("is-active", i === current));

  fill.style.width = `${((current + 1) / slides.length) * 100}%`;
  count.innerHTML = `<b>${current + 1}</b>&thinsp;/&thinsp;${slides.length}`;
  document.title = `${slides[current].dataset.title} | Aljabar Linear Pertemuan 6`;

  history.replaceState(null, "", `#${current + 1}`);
  tandaiDaftarIsi();
  slides[current].scrollTop = 0;
}

function belumTampil(slide) {
  return Array.from(slide.querySelectorAll(".frag:not(.on)"));
}

function tampilSemua(slide) {
  slide.querySelectorAll(".frag").forEach((el) => el.classList.add("on"));
}

function maju() {
  const sisa = belumTampil(slides[current]);
  if (sisa.length) {
    sisa[0].classList.add("on");
    return;
  }
  if (current < slides.length - 1) tampilkan(current + 1);
}

function mundur() {
  const aktif = Array.from(slides[current].querySelectorAll(".frag.on"));
  if (aktif.length) {
    aktif[aktif.length - 1].classList.remove("on");
    return;
  }
  if (current > 0) {
    tampilkan(current - 1);
    tampilSemua(slides[current]);
  }
}

function bukaDaftarIsi() {
  toc.hidden = false;
  tandaiDaftarIsi();
}

function tutupDaftarIsi() {
  toc.hidden = true;
}

function tandaiDaftarIsi() {
  tocGrid.querySelectorAll(".toc__item").forEach((item, i) => {
    item.classList.toggle("is-current", i === current);
  });
}

slides.forEach((slide, i) => {
  const tombol = document.createElement("button");
  tombol.className = "toc__item";
  tombol.type = "button";
  tombol.innerHTML = `<span class="toc__no">${String(i + 1).padStart(2, "0")}</span>${
    slide.dataset.title ?? "Slide"
  }`;
  tombol.addEventListener("click", () => {
    tampilkan(i);
    tutupDaftarIsi();
  });
  tocGrid.appendChild(tombol);
});

document.addEventListener("keydown", (event) => {
  const k = event.key;

  if (k === "Escape") {
    tutupDaftarIsi();
    return;
  }
  if (k === "t" || k === "T") {
    toc.hidden ? bukaDaftarIsi() : tutupDaftarIsi();
    return;
  }

  if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter", "n"].includes(k)) {
    event.preventDefault();
    maju();
  } else if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace", "p"].includes(k)) {
    event.preventDefault();
    mundur();
  } else if (k === "Home") {
    tampilkan(0);
  } else if (k === "End") {
    tampilkan(slides.length - 1);
    tampilSemua(slides[current]);
  }
});

document.querySelectorAll("[data-act]").forEach((tombol) => {
  tombol.addEventListener("click", () => {
    const aksi = tombol.dataset.act;
    if (aksi === "next") maju();
    if (aksi === "prev") mundur();
    if (aksi === "toc") (toc.hidden ? bukaDaftarIsi() : tutupDaftarIsi());
  });
});

toc.addEventListener("click", (event) => {
  if (event.target === toc) tutupDaftarIsi();
});

let sentuhX = 0;
document.addEventListener("touchstart", (event) => {
  sentuhX = event.changedTouches[0].clientX;
}, { passive: true });

document.addEventListener("touchend", (event) => {
  const selisih = event.changedTouches[0].clientX - sentuhX;
  if (Math.abs(selisih) < 60) return;
  selisih < 0 ? maju() : mundur();
}, { passive: true });

window.addEventListener("hashchange", () => {
  const nomor = Number(location.hash.replace("#", ""));
  if (nomor >= 1 && nomor <= slides.length && nomor - 1 !== current) tampilkan(nomor - 1);
});

const awal = Number(location.hash.replace("#", ""));
tampilkan(Number.isFinite(awal) && awal > 0 ? awal - 1 : 0);
