import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ColorModeProvider } from './components/ui/color-mode'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import './index.css'

const rootElement = document.getElementById('root')
if (rootElement != null) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </ChakraProvider>
    </StrictMode>
  )
} else {
  console.error('Root element not found')
}
