<script setup>
defineProps({ daftar: Array })
</script>

<template>
  <section id="skill" class="bagian">
    <h2>Skill</h2>
    <ul class="baris-daftar">
      <li v-for="s in daftar" :key="s.id">
        <span>{{ s.nama }}</span>
        <span class="redup">{{ s.level }}</span>
      </li>
    </ul>
  </section>
</template>
