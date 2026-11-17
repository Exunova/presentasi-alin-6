# Pemeriksaan desain dan materi

Pratinjau lokal pada cabang `codex/light-vector-animations`; belum dipublikasikan.

## Acuan

PDF dosen `ALIN-6 2AB Modif Nj.pdf` menjadi acuan isi, bukan instruksi eksekusi.
Urutan 24 slide dipertahankan. Bahasa menggunakan istilah formal perkuliahan;
diagram memperinci perhitungan tanpa mengganti materi dengan narasi baru.

## Penyelarasan matematika

- Contoh 4: operasi ad + cf dan vektor (0,2,0) memperlihatkan kegagalan definit positif.
- Contoh 5: tiga himpunan vektor asli, termasuk dua himpunan ortonormal.
- Contoh 6: a=(1,2), koefisien 3/√2 dan −1/√2.
- Contoh 7 (halaman 22–25): basis (1,1,1), (0,1,1), (0,0,1); hasil ortonormal (1,1,1)/√3, (−2,1,1)/√6, (0,−1,1)/√2.
- Contoh 8–9: bidang rentangan (1,0,1), (0,1,1); proyeksi (1,1,1) adalah (2/3,2/3,4/3), sisa (1/3,1/3,−1/3).
- Norm berbobot: 2x²+y²+3z²=1 divisualisasikan sebagai elipsoid dengan ukuran sumbu yang sesuai.
- Latihan: koreksi pangkat pada soal 1a, vektor soal 3, dan definisi (Au)·(Av) serta basis soal 4–5 sesuai sumber.

## Verifikasi

- Enam pengujian numerik lulus: rekonstruksi, norm, ortogonalitas, proyeksi, elipsoid, dan penolakan basis dependen.
- Seluruh 24 slide dirender pada browser Edge; tidak ditemukan galat JavaScript atau teks melewati batas vertikal slide dalam pemeriksaan otomatis.
- Tampilan seluruh slide diperiksa melalui lembar kontak; pratinjau 720p tersedia.
- Navigasi tahap maju/mundur, kamera, putar/jeda, daftar isi, pembukaan langsung dari berkas, dan reduced motion diperiksa.
- `deno lint` dan `deno check server.ts` lulus.

Diagram 3D memakai proyeksi ortografis; sudut pada layar berubah menurut kamera,
sedangkan koordinat, norm, dan hasil perhitungan tetap. Ini bukan gambar perspektif
berskala sudut. Animasi dapat dihentikan dan setiap tahap dapat dipilih langsung.

## Tambahan pemahaman konsep

Empat pengantar disisipkan tanpa menghapus 24 slide materi: ruang vektor
sebagai himpunan, hasil kali dalam sebagai aturan bernilai real, ortogonalitas
melalui komponen nol, serta proyeksi sebagai bagian pada subruang. Interpretasi
sudut dibatasi secara eksplisit pada vektor tak nol di bidang Euclides.
Ilustrasi himpunan hanya menampilkan sampel, bukan mengklaim jumlah vektor terbatas.
Seluruh 18 tahap pengantar diperiksa untuk batas teks; animasi perubahan SVG
diuji dalam mode gerak normal dan tahapan diperiksa dengan reduced motion.


## Revisi kontrol setara dan pengantar (17 November 2026)

27 slide. Host dan presenter mempunyai akses navigasi, animasi, kamera, dan
whiteboard yang setara. Pengujian UI berjalan pada port 8017 dengan database
`.runtime/test-equal-controls.sqlite`, terpisah dari sesi pengguna port 8016.
Namespace sesi berubah ke v3 karena indeks slide berubah; coretan dari susunan
lama tidak ditempelkan ke susunan baru. Data sesi lama tidak dihapus dari disk.

Pengantar menjelaskan b sebagai acuan pilihan, dilanjutkan contoh kuadran II
(a=(-4,3), b=(2,0), dot=-8). Manfaat digabung menjadi satu slide awal. Empat
aksioma dosen dipertahankan; tahap meta “hasilnya real” dan “syarat berbeda” dihapus.
Aditivitas dijabarkan lewat pasangan koordinat sebelum perkalian dan penjumlahan.
Angka komponen dalam formula pengantar, aksioma, dan contoh Euclides diberi warna
berdasarkan asal vektornya; hasil skalar campuran tetap netral.

Euclides sebelumnya ada di ALIN-5 (bagian Rn dan perkalian titik); ALIN-4
membahas dot product. Pengantar singkat Euclides ditempatkan pada bagiannya sendiri.
116 tahap diperiksa tanpa galat JS atau luapan vertikal. Sepuluh tes matematika/
protokol lolos. UI diuji dengan 2 host + 2 presenter termasuk host menggambar
serta menggerakkan slide, pergantian peran, dan pemulihan setelah reload.


Pengantar makna dipisahkan dari perhitungan: 28 slide, 117 tahap. Slide 4
menunjukkan dua vektor sebagai masukan, hasil skalar, dan arti positif/nol/negatif
dengan panjang panah tetap. Sudut pada ilustrasi memakai geometri biasa; sudut
dan norm secara umum mengikuti aturan hasil kali dalam yang dipilih. Contoh
komponen kuadran I/II dipindahkan sesudah penjelasan Euclides. Manfaat tetap
satu slide setelah pengantar. Pemeriksaan browser: tanpa galat atau luapan teks.


Revisi aksioma: v=(0,1) tetap berpangkal di asal pada aditivitas. Homogenitas
menampilkan nilai awal 1, lalu dua cara memperoleh 3: memperbesar u menjadi
(3,3), atau mempertahankan u=(1,1) dan mengalikan hasil skalar dengan 3.
Operasi F(u,v)=u1v1-u2v2 diuji pada u=(1,2): F(u,u)=-3, sehingga gagal
positivitas. Operasi ini diberi label berbeda dari hasil kali dalam yang sah.
Vektor yang tidak ada pada tahap tujuan dikeluarkan dari interpolasi; vektor
nol yang memang dibahas tetap ditampilkan. Uji browser animasi normal memastikan
v tidak berpindah pangkal, w/sum hilang saat tidak dipakai, kedua jalur
homogenitas benar, serta vektor nol sah tetap terlihat. Semua 120 tahap lolos
pemeriksaan galat dan luapan vertikal; screenshot homogenitas/penyangkal diperiksa.


Atas permintaan pengguna, susunan pengantar dan Euclides dikembalikan persis
ke commit 2d83811. Satu perubahan pada pengantar: menyatakan eksplisit bahwa
contoh menggunakan hasil kali dalam Euclides. Perbaikan aksioma dan penghilangan
vektor tidak terpakai tetap dipertahankan. Kembali 27 slide; 119 tahap lolos
pemeriksaan browser tanpa galat atau luapan vertikal. Kesamaan berkas konsep
dengan versi acuan (kecuali kalimat tersebut) telah diperiksa secara langsung.


Revisi notes bersama dan soal: 115 tahap tanpa galat/luapan. UI diperiksa untuk
Contoh Soal 1–2 simbolik. Notes memakai KV terpisah, disinkronkan ke presenter saja.
Uji dua presenter dan satu host: edit dua arah, reload, perpindahan slide, ganti
peran ke host, tombol W pada host, dan pembatasan pesan pada server semuanya lolos.
Notes tidak memakai localStorage. Snapshot notes menyertakan versionstamp untuk
mengabaikan kiriman terlambat. Sebelas tes lulus, deno lint/check lulus.

### Draggable presenter notes

Verified in Edge with two presenter pages and one host: header drag changes only the local panel position; shared text still synchronizes; closing/reopening preserves position; dragging to screen edges and resizing to 600 x 450 keeps the panel reachable. Host W and switching presenter to host produce no notes panel. Protocol tests verify hosts never receive notes. All 11 tests, Deno lint, and server type check pass.
