import { ref } from 'vue'
import { skill } from '../data/profil'

export function useSkill() {
  const daftarSkill = ref(skill)
  return { daftarSkill }
}
