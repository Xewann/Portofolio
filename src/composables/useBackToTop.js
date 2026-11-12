import { ref, onMounted, onUnmounted } from 'vue'

export function useBackToTop(batas = 400) {
  const terlihat = ref(false)

  function cekScroll() {
    terlihat.value = window.scrollY > batas
  }

  function keAtas() {
    const kurangiGerak = matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: kurangiGerak ? 'auto' : 'smooth' })
  }

  onMounted(() => {
    cekScroll()
    window.addEventListener('scroll', cekScroll, { passive: true })
  })
  onUnmounted(() => window.removeEventListener('scroll', cekScroll))

  return { terlihat, keAtas }
}
