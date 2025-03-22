import {React,useState} from 'react'
import CarouselP from '../CarouselP';
import Footer from '../Footer';
import { Modal } from 'react-bootstrap';
import Faqs from './Faqs';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap';
export default function Home(props) {



  const navigate = useNavigate();
  function navigateMovies(){
    navigate('/moviePage')
  }
  return (
    <>


    <div className='text-center fs-5 p-5 txtsection'>
    <h1 className='fw-bold'>Watch Unlimited Movies,
     </h1>
      <h1 className='fw-bold'>TV shows, Web series and more</h1>
    <h1 className=' fw-bold my-3' style={{color:"#ff0505",textShadow:'2px 2px 5px 5px black' }}><b>ABSOLUTELY FREE</b></h1>
    <Button onClick={navigateMovies} className=' fw-bold border-0 py-2' style={{backgroundColor:'#ff0505'}}>Get Started <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></Button>
    </div>
      <CarouselP id='setv' />
      <Faqs/>
      <Footer id='setv' />

    </>
  )
}
