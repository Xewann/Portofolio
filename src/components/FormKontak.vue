<script setup>
import { useFormKontak } from '../composables/useFormKontak'

const emit = defineEmits(['terkirim'])
const { nama, email, pesan, sudahDicoba, galatNama, galatEmail, galatPesan, formValid, reset } = useFormKontak()

function kirim() {
  sudahDicoba.value = true
  if (!formValid.value) return
  emit('terkirim', { nama: nama.value.trim(), email: email.value.trim(), pesan: pesan.value.trim() })
  reset()
}
</script>

<template>
  <section id="kontak" class="bagian">
    <h2>Kontak</h2>
    <form novalidate @submit.prevent="kirim">
      <div class="isian">
        <label for="nama">Nama</label>
        <input id="nama" v-model="nama" autocomplete="name" :aria-invalid="sudahDicoba && !!galatNama">
        <p v-if="sudahDicoba && galatNama" class="galat">{{ galatNama }}</p>
      </div>
      <div class="isian">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" autocomplete="email" :aria-invalid="sudahDicoba && !!galatEmail">
        <p v-if="sudahDicoba && galatEmail" class="galat">{{ galatEmail }}</p>
      </div>
      <div class="isian">
        <label for="pesan">Pesan</label>
        <textarea id="pesan" v-model="pesan" rows="5" :aria-invalid="sudahDicoba && !!galatPesan"></textarea>
        <p v-if="sudahDicoba && galatPesan" class="galat">{{ galatPesan }}</p>
      </div>
      <button type="submit" class="tombol">Kirim pesan</button>
    </form>
  </section>
</template>
