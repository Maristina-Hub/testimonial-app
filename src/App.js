import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/Nav/navbar.js'
import TestimonialForm from './components/form/formPage.js'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<NavBar/>} />
          <Route exact path='/form' element={<TestimonialForm/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
