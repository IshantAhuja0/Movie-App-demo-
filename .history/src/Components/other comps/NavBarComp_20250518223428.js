import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useRef } from 'react'
import { Modal } from 'react-bootstrap';
import { FaCashRegister } from "react-icons/fa6";
import { Form } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  NavLink
} from "react-router-dom";


function NavBarComp(props) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  function add() {
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "Name": name,
        "Password": password
      })
    }

    fetch('https://apifortesting.netlify.app//.netlify/functions/app/insertemployees', requestOption).then((res) => {
      console.log("resp is" + res)
      res.json().then((resp) => {
        if (resp.status == 200) {
          alert("User registered successfully!")
        }
        else {
          console.log("User not registered ! Try again later")
        }

      })
    })

  }

  const mail = useRef();
  const pass = useRef();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  function handleSubmit() {
    add();
    handleClose();
  }


  const [login, setLogin] = useState(true);
  function hamburgerClicked() {
    setLogin(!login)
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='w-100 navbar-expang-lg' >
        <div className="d-flex align-items-center ">
          <img src="https://logodix.com/logo/818959.png" style={{ width: "3.5rem", height: "3rem", marginLeft: "0.5rem" }} className="rounded-1 " />
          <h4 style={{ color: "white", fontFamily: "Gill Sans", padding: "1rem" }}>JustMovies</h4>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={hamburgerClicked} />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
  <NavLink className={({ isActive }) => `${isActive ? "text-danger" : "text-secondary"} pt-4 mx-2 text-secondary text-decoration-none`} to="/home">Home</NavLink>
  <NavLink className={({ isActive }) => `${isActive ? "text-danger" : "text-secondary"} pt-4 mx-2 text-secondary text-decoration-none`} to="/moviepage">Movies</NavLink>
  <NavDropdown title="Genre" id="navbarScrollingDropdown" className="pt-4 mx-2 text-secondary text-decoration-none p-lg-3 ">
    <NavDropdown.Item className="px-5">Entertainment</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item className="px-5">Thriller</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item className="px-5">Biography</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item className="px-5">Action</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item className="px-5">Drama</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item className="px-5">Sci-Fi</NavDropdown.Item>
  </NavDropdown>
  <NavLink className={({ isActive }) => `${isActive ? "text-danger" : "text-secondary"} pt-4 mx-2 text-secondary text-decoration-none`} to="/about">About</NavLink>
</Nav>
        </Navbar.Collapse>
        <div className='text-center'>
          {login ?
            <Button
              className='mx-2 border-0 ' style={{ backgroundColor: '#ff0505', width: '6.5rem' }} onClick={handleShow}>Register <FaCashRegister /></Button>
            : <Button hidden></Button>
          }
            {/* {login ?
              <Button
                className='mx-2 border-0 text-center' style={{ backgroundColor: 'green', width: '6rem' }} >Login <MdLogin className='fs-4' /></Button>
              : <Button hidden></Button>
            } */}
        </div>
      </Navbar>


      {/* overlay of login popup  */}
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={mail} onChange={(e) => {
                  setName(e.target.value);
                }} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={pass} onChange={(e) => {
                  setPassword(e.target.value);
                }} />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Agree to terms and conditions" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  )
}
export default NavBarComp;