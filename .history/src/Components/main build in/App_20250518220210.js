import 'bootstrap/dist/css/bootstrap.min.css';
import {

  Outlet
} from "react-router-dom";
import NavBarComp from "../other comps/NavBarComp";
import Footer from "../other comps/Footer";
import UserContextProvider from '../../context/UserContextProvider';
function App(props) {

  return (
    <MmoContextProvider>
      <NavBarComp />
      <Outlet />
      <Footer />
    </MmoContextProvider>
  );
}

export default App;

