import 'bootstrap/dist/css/bootstrap.min.css';
import {

  Outlet
} from "react-router-dom";
import NavBarComp from "../other comps/NavBarComp";
import Footer from "../other comps/Footer";
import MoContextProvider from '../../context/UserContextProvider';
function App(props) {

  return (
    <MovieContextProvider>
      <NavBarComp />
      <Outlet />
      <Footer />
    </MovieContextProvider>
  );
}

export default App;

