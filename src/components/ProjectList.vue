<script setup>
defineProps({ daftar: Array })
</script>

<template>
  <section id="proyek" class="bagian">
    <h2>Proyek</h2>
    <ul class="baris-daftar proyek">
      <li v-for="p in daftar" :key="p.id">
        <h3><a :href="p.tautan">{{ p.judul }}</a></h3>
        <p>{{ p.deskripsi }}</p>
        <p class="redup">{{ p.teknologi }}</p>
      </li>
    </ul>
  </section>
</template>
