import { pt_br } from './languages/pt_br'
import { en_us } from './languages/en_us'

const languages = [
  {
    name: 'en-US',
    file: en_us
  },
  {
    name: 'pt-BR',
    file: pt_br
  }
]

const getCurrentLanguage = () => {
  var locale = localStorage.getItem('@1nfluencersTest:language')
    ? localStorage.getItem('@1nfluencersTest:language')
    : navigator.language

  const result = languages.find((language: { name: string, file: Object }) => language.name === locale)

  return result ? result : { name: "en-US", file: en_us }
}

export const translate = getCurrentLanguage().file
export const currentLanguage = getCurrentLanguage().name
export const setLanguage = (value: string) => {
  localStorage.setItem('@1nfluencersTest:language', value)
  window.location.reload()
}