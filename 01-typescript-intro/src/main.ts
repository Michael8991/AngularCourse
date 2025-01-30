import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
// import './topics/01-basic-types'
import './topics/02-object-interface'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola mundo
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
