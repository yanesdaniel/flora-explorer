import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ColorModeProvider } from './components/ui/color-mode'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

const AppTree = () => (
  <ChakraProvider value={defaultSystem}>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </ChakraProvider>
)

const root = createRoot(document.getElementById('root')!)

root.render(
  import.meta.env.NODE_ENV === 'development'
    ? (
      <StrictMode>
        <AppTree />
      </StrictMode>
      )
    : (
      <AppTree />
      )
)
