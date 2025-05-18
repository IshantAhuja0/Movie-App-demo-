import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { TbMovie } from "react-icons/tb";
function MovieCard(props) {
  return (
    <Card key={props.key} style={{ width: '16.3rem', height: "24.5rem" }} className='p-1 mx-2 d-flex flex-column'>
      <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w1280' + props.data.poster_path} alt='Picture not available' style={{ height: '14.5rem' }} />
      <Card.Body className="d-flex flex-column" >
        <Card.Title className="card-title">{props.data.title}</Card.Title>
        {/* <Card.Text>{props.data.}</Card.Text> */}
        <Button variant="danger" href='https://www.netflix.com/in/browse/genre/839338' className='btn w-100 mt-auto'>Watch Now <TbMovie /></Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;