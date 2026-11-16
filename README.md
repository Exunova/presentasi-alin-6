# Presentasi Ruang Hasil Kali Dalam

Presentasi web untuk Aljabar Linear pertemuan 6 (Bab VI), disusun dari materi
`ALIN-6 2AB Modif Nj`. Isinya: definisi dan aksioma hasil kali dalam, norm,
himpunan ortogonal dan ortonormal, proses Gram-Schmidt, proyeksi ortogonal,
serta latihan Bab VI.

Disusun oleh Kemal Ardian, NIM 251524053, kelas 2B.

Anggota kelompok 2B: Arya Nata Adidjaya (251524039), Dzikra Alghufroon (251524041),
Fatur Hanafi (251524043), Kemal Ardian (251524053), Muhammad Akhtar Khawarizmi
(251524055), Nadhief Musyaffa (251524059).

## Isi folder

```
server.ts        server Deno yang menyajikan folder public/
deno.json        konfigurasi dan task Deno
public/index.html   seluruh slide (24 slide)
public/styles.css   tampilan
public/deck.js      navigasi slide
public/assets/anggota/  foto anggota, sudah dipotong 3:4 (720 x 960)
docs/ALIN-6 2AB Modif Nj.pdf  materi sumber, tidak ikut disajikan
```

Tidak ada dependensi front-end. Semua berkas dilayani dari folder `public/`,
jadi halaman tetap tampil tanpa koneksi internet.

## Menjalankan lokal

```sh
deno task start
```

Buka http://localhost:8000. Untuk mode pantau saat menyunting:

```sh
deno task dev
```

## Navigasi

| Tombol | Fungsi |
| --- | --- |
| `Panah kanan`, `spasi`, `Enter` | Maju, termasuk membuka potongan penjelasan satu per satu |
| `Panah kiri`, `Backspace` | Mundur |
| `T` | Buka atau tutup daftar isi |
| `Home`, `End` | Slide pertama atau terakhir |
| `Esc` | Tutup daftar isi |

Geser layar ke kiri atau ke kanan juga bisa dipakai di ponsel.

## Deploy ke Deno Deploy

Presentasi ini situs statis murni (HTML, CSS, JS, gambar), jadi runtime-nya
`static` dan `server.ts` hanya dipakai untuk pratinjau lokal. Semua pengaturan
build dibaca dari `deno.json`, termasuk nama org dan aplikasi:

```json
"deploy": {
  "org": "symful",
  "app": "present-alin",
  "runtime": { "type": "static", "cwd": "./public" }
}
```

Deploy berjalan otomatis lewat `.github/workflows/deploy.yml` setiap kali ada
push ke `main`. Yang perlu disiapkan sekali di GitHub:

1. Buat access token organisasi di dashboard Deno Deploy
   (https://console.deno.com), lalu simpan sebagai repository secret bernama
   `DENO_DEPLOY_TOKEN`.
2. Pastikan aplikasi `present-alin` sudah ada di org `symful` dan sumbernya
   `local`. Kalau belum:

```sh
deno deploy create --org symful --app present-alin \
  --source local --runtime-mode static --static-dir public --region global
```

Tidak ada kredensial lain yang dibutuhkan. Deploy manual dari mesin sendiri
tetap bisa:

```sh
deno deploy --prod
```

## Catatan

Materi mengikuti urutan slide perkuliahan. Contoh 7 dan 8 memakai bilangan
yang dihitung ulang supaya hasilnya rapi dan mudah diperiksa di papan tulis.
