import Header from './Header'
import Homepage from './Homepage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Blog from './Blog'

function App() {
  return(
    <Router>
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
