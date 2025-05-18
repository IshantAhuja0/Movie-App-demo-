import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Cardnew(props) {
  return (
    <>

      <Col sm={6} md={4} lg={3}>
        <Card className='mb-4 shadow-lg' id={props.key} style={{ minHeight: '28rem', maxHeight: '28rem', overflow: 'hidden', backgroundColor: "#040b14", color: "white" }}>
          <Card.Img className='p-2 border-1 rounded-4' style={{ maxHeight: '17rem' }} src={'https://image.tmdb.org/t/p/w1280' + props.data.poster_path} alt='Picture not available' />
          <Card.Body>
            <div className='d-flex justify-content-between align-items-center'>
              {/* <Card.Title></Card.Title> */}
              <span className='fw-semibold fs-4'>{props.data.title}</span>
              <span className='fw-bold fs-6'> {props.data.vote_average}</span>
            </div>
            <Card.Text style={{ height: '2rem', marginBottom: '1rem' }}>
              {props.data.overview}
            </Card.Text>
          </Card.Body>
          <div className='d-flex justify-content-between'>
            {/* <Button className='m-2 mx-4 px-4 py-2 bg-danger border-0 fw-bolder'><span class="material-symbols-outlined">
play_circle
</span></Button>
      <Button className='m-2 mx-4'>Netflix</Button> */}

          </div>
        </Card>
      </Col>
    </>
  );
}

export default Cardnew;