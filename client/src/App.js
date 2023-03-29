import { Routes, Route } from 'react-router-dom';
import Home from './Components/Core/Home';
import Nav from './Components/Core/Nav';
import Swiftle from './Components/Projects/Swiftle'
import BookIt from './Components/Projects/BookIt';

function App() {

  return (
    <div className="layer">
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/swiftle-wordle' element={<Swiftle/>}></Route>
        <Route exact path='/book-it' element={<BookIt/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
