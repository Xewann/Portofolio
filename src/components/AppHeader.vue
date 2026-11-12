<script setup>
defineProps({ nama: String, tema: String })
defineEmits(['ganti-tema'])
</script>

<template>
  <header class="header">
    <div class="wrap header-isi">
      <a href="#atas" class="brand">{{ nama }}</a>
      <nav aria-label="Utama">
        <a href="#skill">Skill</a>
        <a href="#proyek">Proyek</a>
        <a href="#kontak">Kontak</a>
        <button type="button" class="tombol-teks" :aria-pressed="tema === 'dark'" @click="$emit('ganti-tema')">
          {{ tema === 'dark' ? 'Tema terang' : 'Tema gelap' }}
        </button>
      </nav>
    </div>
  </header>
</template>
