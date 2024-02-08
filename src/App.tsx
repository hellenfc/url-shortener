import './App.css'

import AppProviders from './providers/app-providers'
import Layout from './components/Layout'

function App() {
  return (
    <AppProviders>
      <Layout />
    </AppProviders>
  )
}

export default App
