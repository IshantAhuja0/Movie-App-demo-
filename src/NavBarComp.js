import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {React,useState,useRef} from 'react'
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { MdLogin } from "react-icons/md";
import { FaRegistered } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  Routes,
  Route,
  Link

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
      console.log("resp is"+ res)
      res.json().then((resp) => {       
        if (resp.status == 200) {
          alert("record inserted successfully")
        }
        else {
          console.log("problem in inserting data status code not equal to 200")
        }

      })
    })

  }

  const mail=useRef();
  const pass=useRef();
  const [show, setShow] = useState(false);
  
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  function handleSubmit(){
add();
handleClose();
  }


const[login,setLogin]=useState(true);
function hamburgerClicked(){
  setLogin(!login)
}
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='w-100' >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={hamburgerClicked}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className='text-decoration-none text-secondary p-lg-4' to={{ pathname: "/home" }}>Home</Link>
            <Link className='text-decoration-none text-secondary p-lg-4' to={{ pathname: "/moviepage" }}>Movies</Link>
            <NavDropdown title="Genre" id="navbarScrollingDropdown" className='text-decoration-none text-secondary p-lg-3'>
              <NavDropdown.Item  className='px-5'>
                Entertainment
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='px-5'>
                Thriller
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='px-5'>
                Biograpgy
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='px-5'>
                Action
              </NavDropdown.Item  >
              <NavDropdown.Divider />
              <NavDropdown.Item className='px-5'>
                Drama
              </NavDropdown.Item  >
              <NavDropdown.Divider />
              <NavDropdown.Item  className='px-5'>
                Sci-Fi
              </NavDropdown.Item >
            </NavDropdown>
            <Link className='text-decoration-none text-secondary p-lg-4' to={{ pathname: "/about" }}>About</Link>
          </Nav>
        </Navbar.Collapse>
        <div className='text-center'>
         { login?
          <Button 
           className='mx-2 border-0 fw-bold' style={{backgroundColor:'#ff0505',width:'7rem'}} onClick={handleShow}>Register <FaRegistered /></Button>
           :<Button hidden></Button>
         }
 {login?
          <Button 
           className='mx-2 border-0 fw-bold text-center' style={{backgroundColor:'green',width:'6.5rem'}} >Login <MdLogin className='fs-4'/></Button>
           :<Button hidden></Button>
 }
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
          }}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={pass}  onChange={(e) => {
            setPassword(e.target.value);
          }}/>
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