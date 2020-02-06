import React, {} from 'react';
import {Image, Container, Row, Col} from 'react-bootstrap';


function Configure(props) {
  if (props.Config) {
    return null;
  }
  return (
    <div className='App'>
        <Container fluid >
          <h1>The <code>Configure</code> is under development</h1>
          <Row>
            <Col><Image className='App-logo' src="./logo192.png" rounded/></Col>
          </Row>
        </Container>
      </div>
  );
}

export default Configure;
