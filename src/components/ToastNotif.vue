  <script setup>
import { onMounted, onUnmounted } from 'vue'

defineProps({ pesan: String })
const emit = defineEmits(['tutup'])

let timer
onMounted(() => { timer = setTimeout(() => emit('tutup'), 5000) })
onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <div class="toast" role="status">
    <span>{{ pesan }}</span>
    <button type="button" class="tombol-teks" @click="emit('tutup')">Tutup</button>
  </div>
</template>
          