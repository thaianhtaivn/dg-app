import React, {} from 'react';
import {Image, Container, Row, Col, Button} from 'react-bootstrap';


function DG(props) {
  const items=[
    {
      name: 'Excellent',
      src: "./logo192.png"
    },
    {
      name: 'Good',
      src: "./logo192.png"
    },
    {
      name: 'Normal',
      src: "./logo192.png"
    },
    {
      name: 'Bad',
      src: "./logo192.png"
    }
  ];
  const elmImage = items.map((item, index) =>
    <Col key={index}>
      <h2>{item.name}</h2>
      <Image src={item.src} onClick={()=>alert("Excellent")} rounded/>
      <Button variant='secondary'>Edit picture</Button>
      <h4>{item.name}</h4>
    </Col>
  );

  if (!props.Demo) {
    return null;
  }
  return (
    <div >
        <Container fluid>
          <Row className='App'>
            {elmImage}
          </Row>
        </Container>
      </div>
  );
}

export default DG;
