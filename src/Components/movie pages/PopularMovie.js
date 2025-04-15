import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FaCircleArrowRight } from "react-icons/fa6";
import MovieCard from './MovieCard';
export function PopularMovie(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=6')
      .then((resp) => resp.json())
      .then((res) => setData(res.results))
  }, [])

  return (
    <>
      <Container className=' shadow-lg rounded p-3 mt-5 bg-white' >
        <h4>{props.data}</h4>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <h4 >Popular Movies</h4>
          </Nav.Item>
        </Nav>
        <hr />
        <div className='d-flex overflow-x-auto '>
          {
            data.map((movie, id) => (
              <div>
                <MovieCard data={movie} key={id} />
              </div>
            ))
          }

        </div>
     <Nav.Link className='ps-3 mt-2 fw-bold fs-6 text-danger'>See more <FaCircleArrowRight /></Nav.Link>
      </Container>
    </>
  )
}
export default PopularMovie;