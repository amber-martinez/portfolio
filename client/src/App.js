import { Routes, Route } from 'react-router-dom';
import Home from './Components/Core/Home';
import Nav from './Components/Core/Nav';
import Swiftle from './Components/Projects/Swiftle'
import BookIt from './Components/Projects/BookIt/BookIt';
import MyBooknook from './Components/Projects/MyBooknook/MyBooknook';
import AboutMe from './Components/Core/AboutMe/AboutMe';
import HarvardX from './Components/Projects/HarvardX/HarvardX';
import TopNav from './Components/Core/TopNav';
import Episode from './Components/Projects/Episode/Episode';

function App() {

  return (
    <div>
      <div id="defNav">
        <Nav/>
      </div>
      <div id="topNav">
        <TopNav/>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about-me' element={<AboutMe/>}></Route>
        <Route exact path='/swiftle-wordle' element={<Swiftle/>}></Route>
        <Route exact path='/book-it' element={<BookIt/>}></Route>
        <Route exact path='/my-booknook' element={<MyBooknook/>}></Route>
        <Route exact path='/harvardX' element={<HarvardX/>}></Route>
        <Route exact path='/harvardX' element={<Episode/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
