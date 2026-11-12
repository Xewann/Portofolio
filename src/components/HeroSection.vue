<script setup>
defineProps({ profil: Object })
</script>

<template>
  <section class="hero" id="atas">
    <p class="peran">{{ profil.peran }}</p>
    <h1>{{ profil.nama }}</h1>
    <p class="ringkas">{{ profil.ringkas }}</p>
    <p class="tautan-hero">
      <a :href="profil.github">GitHub</a>
      <a :href="'mailto:' + profil.email">{{ profil.email }}</a>
    </p>
  </section>
</template>
