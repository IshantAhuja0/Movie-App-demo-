import React, { useRef, useState,useContext } from 'react';
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import SearchedMovie from './SearchedMovie';
import MovieContext from '../../context/MovieContext';
export default function SearchBar(props) {
  const{movies,setMovies}=useContext(MovieContext);
  const SEARCHAPI = //to get searched movies
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  const text=useRef();
  const [query, setQuery] = useState('');

  const getMovies = async (api) => {
  fetch(api)
  .then((resp)=>resp.json())
  .then((data)=>setMovies(data.results))
  };

  function search(searched){
    getMovies(SEARCHAPI+query);
    <SearchedMovie data={movies}/>
  }
  const handleSearch = (searched) => {
    searched.preventDefault(); 
    search(searched.target.value);
    setQuery(searched.target.value);
  };
  return (
    <>
      <Container>
      <Row className="py-4 d-flex justify-content-between">
        <Col>
          <Form onSubmit={handleSearch} className="d-flex">
            <FormControl
              ref={text}
              type="text"
              placeholder="Search..."
              className="me-2"
              value={query}
              onChange={(e) => handleSearch(e)}
            />
            <Button variant="primary" type="submit">
            <FaSearch />
            </Button>
          </Form>
        </Col>
        {/* <Col md={6} className='align-self-center justify-content-end d-flex'>
        <Button variant='primary' className='mx-2'>Prev</Button>
        <Button variant='primary'>Next</Button>
        </Col> */}
      </Row>
    </Container>
    </>
  )
}

