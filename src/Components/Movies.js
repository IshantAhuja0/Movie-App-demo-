import React, { useEffect, useState } from 'react'
import Cardnew from '../Cardnew';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default   function Movies(props) {
  const APIURL = //to get polular movies
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCHAPI = //to get searched movies
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
fetch(APIURL)
.then((res)=>res.json())
.then((resp)=>setMovies(resp.results))
  },[])

    return (
      <>
          <Container className='mt-3'>
          <Row>

        {movies.map((movie, id) => (
          <Cardnew data={movie} key={id} />
        ))}
        </Row>

</Container>
      </>
    );
  }
