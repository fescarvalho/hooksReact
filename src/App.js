import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

//pages
import Home from '../src/pages/Home'
import About from '../src/pages/About'

function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
