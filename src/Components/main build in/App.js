import 'bootstrap/dist/css/bootstrap.min.css';
import {

  Outlet
}  from "react-router-dom";
import NavBarComp from "../other comps/NavBarComp";
import Footer from "../other comps/Footer";
function App(props) {

  return (
    <>
<NavBarComp/>
<Outlet/>
<Footer/>
    </>
  );
}

export default App;

