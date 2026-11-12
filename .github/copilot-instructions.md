# Konteks Proyek: cv-diri

Website portofolio/CV pribadi — Single Page Application berbasis Vue 3.

## Stack
- Framework: Vue 3 (^3.5.40) — gunakan Composition API (`<script setup>`), bukan Options API
- Build tool: Vite (^8.1.5)
- Plugin: `@vitejs/plugin-vue`, `vite-plugin-vue-devtools`
- Package manager: npm
- Styling: CSS murni (`src/style.css` untuk styling global) — bukan Tailwind/SCSS kecuali disebutkan lain

## Skrip
- `npm run dev` — development server
- `npm run build` — build produksi
- `npm run preview` — preview hasil build

## Struktur folder
- `src/App.vue`, `src/main.js` — root component & entry point, jarang perlu diubah
- `src/components/` — komponen UI modular (per section CV: Hero, Experience, Skills, dll.)
- `src/composables/` — reusable composition functions (state/logic yang dipakai lintas komponen), ikuti konvensi penamaan `useXxx.js`
- `src/data/` — data CV/portofolio terstruktur (riwayat kerja, skills, project, dll.) — biasanya file `.js`/`.json` berisi array/object statis, BUKAN hasil fetch API

## Konvensi
- Komponen baru: PascalCase (`Experience.vue`, `SkillCard.vue`), ditaruh di `src/components/`
- Pisahkan logika reusable ke `composables/`, jangan duplikasi logic antar komponen
- Konten/data CV (teks, tanggal, link) taruh di `src/data/`, jangan hardcode langsung di template komponen — supaya gampang diupdate tanpa sentuh logic
- Proyek solo & statis (tanpa backend) — hindari over-engineering: tidak perlu state management library (Pinia/Vuex) kecuali state sudah benar-benar kompleks lintas banyak komponen
- Prioritaskan performa & bundle size kecil — ini SPA portofolio yang dilihat recruiter, loading time penting

## Preferensi kerja
- Saya solo developer — jelaskan trade-off singkat kalau menyarankan dependency baru
- Jaga agar styling tetap konsisten dengan `style.css` yang sudah ada sebelum menambah file CSS baru        