import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Core/Home';
import Nav from './Components/Core/Nav';
import Swiftle from './Components/Projects/Swiftle'

function App() {

  return (
    <div className="layer">
      <Nav />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/swiftle-wordle' element={<Swiftle />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
