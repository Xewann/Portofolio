<script setup>
import { ref } from 'vue'
import { profil, proyek } from './data/profil'
import { useSkill } from './composables/useSkill'
import { useTheme } from './composables/useTheme'
import { useBackToTop } from './composables/useBackToTop'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SkillList from './components/SkillList.vue'
import ProjectList from './components/ProjectList.vue'
import FormKontak from './components/FormKontak.vue'
import ToastNotif from './components/ToastNotif.vue'

const { daftarSkill } = useSkill()
const { tema, gantiTema } = useTheme()
const { terlihat, keAtas } = useBackToTop()

const notif = ref('')
function formTerkirim(data) {
  notif.value = `Terima kasih, ${data.nama}. Pesan Anda sudah dikirim.`
}
</script>

<template>
  <AppHeader :nama="profil.nama" :tema="tema" @ganti-tema="gantiTema" />
  <main class="wrap">
    <HeroSection :profil="profil" />
    <SkillList :daftar="daftarSkill" />
    <ProjectList :daftar="proyek" />
    <FormKontak @terkirim="formTerkirim" />
  </main>
  <footer class="wrap footer">
    <p class="redup">{{ profil.nama }}, {{ new Date().getFullYear() }}</p>
  </footer>

  <ToastNotif v-if="notif" :pesan="notif" @tutup="notif = ''" />
  <button v-if="terlihat" type="button" class="ke-atas" @click="keAtas">Ke atas</button>
</template>
