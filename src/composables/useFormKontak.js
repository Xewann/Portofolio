import { ref, computed } from 'vue'

export function useFormKontak() {
  const nama = ref('')
  const email = ref('')
  const pesan = ref('')
  const sudahDicoba = ref(false) // galat baru tampil setelah tombol kirim ditekan

  const galatNama = computed(() =>
    nama.value.trim().length >= 3 ? '' : 'Nama minimal 3 karakter.')
  const galatEmail = computed(() =>
    /^\S+@\S+\.\S+$/.test(email.value.trim()) ? '' : 'Isi email yang valid, misalnya nama@contoh.com.')
  const galatPesan = computed(() =>
    pesan.value.trim().length >= 10 ? '' : 'Pesan minimal 10 karakter.')

  const formValid = computed(() =>
    !galatNama.value && !galatEmail.value && !galatPesan.value)

  function reset() {
    nama.value = ''
    email.value = ''
    pesan.value = ''
    sudahDicoba.value = false
  }

  return { nama, email, pesan, sudahDicoba, galatNama, galatEmail, galatPesan, formValid, reset }
}
