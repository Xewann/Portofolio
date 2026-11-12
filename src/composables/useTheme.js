import { ref, onMounted } from 'vue'

export function useTheme() {
  const tema = ref('light')

  function terapkan(nilai) {
    tema.value = nilai
    document.documentElement.dataset.theme = nilai
    try { localStorage.setItem('tema', nilai) } catch (e) {}
  }

  function gantiTema() {
    terapkan(tema.value === 'dark' ? 'light' : 'dark')
  }

  // Ambil tema yang sudah dipasang oleh script di index.html
  onMounted(() => {
    tema.value = document.documentElement.dataset.theme || 'light'
  })

  return { tema, gantiTema }
}
