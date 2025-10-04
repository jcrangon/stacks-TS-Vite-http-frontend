import { sum } from '@/lib/utils/math'

const app: HTMLElement = document.getElementById('app')!
const btn: HTMLButtonElement = document.createElement('button')
btn.textContent = 'Clique-moi'
btn.addEventListener('click', () => {
  const p: HTMLParagraphElement = document.createElement('p')
  p.textContent = `2 + 3 = ${sum(2, 3)}`
  app.appendChild(p)
})
app.appendChild(btn)
console.log('App started...')
