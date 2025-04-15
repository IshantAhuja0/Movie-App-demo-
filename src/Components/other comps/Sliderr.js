import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardnew from './Cardnew'
export default function Sliderr(props) {
  

  return (
    <>
            <Container>
  <Row>
    <Col>
    <Cardnew/>
    </Col>
    <Col>
    <Cardnew/>
    </Col>

    <Col>
    <Cardnew/>
    </Col>
  </Row>
  <Row>
    <Col>
    <Cardnew/>
    </Col>

    <Col>
    <Cardnew/>
    </Col>
    <Col>
    <Cardnew/>
    </Col>
  </Row>

</Container>
    </>
  )
}
