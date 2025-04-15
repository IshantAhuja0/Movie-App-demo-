import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Cardnew from './Cardnew'
export default function SearchedMovie(props) {


  return (
    <>
      <Container className='mt-3'>
        <Row>
          {props.results.map((movie, id) => (
            <Cardnew data={movie} key={id} />
          ))}
        </Row>
      </Container>
    </>
  )
}
