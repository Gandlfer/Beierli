import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './app/routes/AppRoutes'

function App() {

  return (
    <BrowserRouter basename="/Beierli">
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
