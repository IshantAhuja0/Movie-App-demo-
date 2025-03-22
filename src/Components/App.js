import About from "./About";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviePage from './MoviePage'
import { Container } from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
}  from "react-router-dom";
import NavBarComp from "../NavBarComp";
function App(props) {

  return (
    <div >
    <BrowserRouter>
    <NavBarComp/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/moviepage" element={<MoviePage/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

