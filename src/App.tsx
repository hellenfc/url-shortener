import './App.css'

import { NextUIProvider } from '@nextui-org/react'
import Layout from './components/Layout'

function App() {
  return (
    <NextUIProvider>
      <Layout />
    </NextUIProvider>
  )
}

export default App
