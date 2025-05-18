import Carousel from 'react-bootstrap/Carousel';
function CarouselP() {
  return (


    <Carousel style={{ margin:'0.5rem'}} interval={2000} className='bg-black mt-3'> 
    
      <Carousel.Item >
       <img src='https://wallpaperaccess.com/full/914271.jpg'  style={{height:'35rem' ,width:'91rem',maxHeight:'35rem',minHeight:'15rem'}} className='img-fluid h-auto' sm={6} md={4}  lg={3}/>
        <Carousel.Caption>
          <h3>Spiderman</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
       <img src='https://wallpaperaccess.com/full/914271.jpg'  style={{height:'35rem' ,width:'91rem',maxHeight:'35rem',minHeight:'15rem'}} className='img-fluid h-auto' sm={6} md={4}  lg={3}/>
        <Carousel.Caption>
          <h3>Spiderman</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
       <img src='https://i.ytimg.com/vi/UUrHQSqFrwg/maxresdefault.jpg'  style={{height:'35rem' ,width:'91rem',maxHeight:'35rem',minHeight:'15rem'}} className='img-fluid h-auto' sm={6} md={4}  lg={3}/>
        <Carousel.Caption>
          <h3>Jawan</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
       <img  src='https://th.bing.com/th/id/OIP.tbu3xV2WaJ74VuO8zxBYHgHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain'  style={{height:'35rem' ,width:'91rem',maxHeight:'35rem',minHeight:'15rem'}} className='img-fluid h-auto' sm={6} md={4}  lg={3}/>
        <Carousel.Caption>
          <h3>Avengers</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item> 
       <img src='https://wallpapercave.com/wp/wp7923275.jpg' style={{height:'35rem' ,width:'91rem',maxHeight:'35rem',minHeight:'15rem'}} className='img-fluid h-auto' sm={6} md={4}  lg={3}/>
        <Carousel.Caption>
          <h3>Joker</h3>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> 
       <img  src='https://wallpaperaccess.com/full/37959.jpg' style={{height:'35rem' ,width:'91rem',maxHeight:'35rem',minHeight:'15rem'}} className='img-fluid h-auto' sm={6} md={4}  lg={3}/>
        <Carousel.Caption>
          <h3>Rise of an Empire</h3>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default CarouselP;