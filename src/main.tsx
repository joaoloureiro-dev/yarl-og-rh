import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/lilita-one/400.css'
import '@fontsource-variable/nunito-sans/wght.css'
import '@fontsource-variable/roboto-mono/wght.css'
import './index.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
