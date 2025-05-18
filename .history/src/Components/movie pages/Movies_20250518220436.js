import React, { useEffect, useState, useContext } from 'react'
import MovieContext from '../../context/MovieContext';
import Cardnew from '../other comps/Cardnew';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export function Movies(props) {

  const APIURL = //to get polular movies
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  const SEARCHAPI = //to get searched movies
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const {movies,setMovies} = useContext(Movie);
  // const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((resp) => setMovies(resp.results))
  }, [])
 
  return (
    <>
      <Container className='mt-3'>
        <Row>
          {movies.map((movie, id) => (
<Cardnew key={movie.id || id} data={movie} id={id} />

          ))}
        </Row>
      </Container>
    </>
  );
}
export default Movies;