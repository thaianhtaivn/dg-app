import React, {} from 'react';
import {Button, Image, Container, Row, Col} from 'react-bootstrap';
function Home(props) {
  if (!props.Home) {
    return null;
  }
  return (
    <div className="App">
      <header className="App-header">
        <Image className='App-logo' src="./logo192.png"></Image>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant = "primary"> Click here for newURL</Button>
        </a>
        <Container fluid>
          <Row>
            <Col sm><Image src="./logo192.png" onClick={()=>alert("Excellent")} rounded/></Col>
            <Col sm><Image src="./logo192.png" onClick={()=>alert("Good")} rounded/></Col>
            <Col sm><Image src="./logo192.png" onClick={()=>alert("Normal")} rounded/></Col>
            <Col sm><Image src="./logo192.png" onClick={()=>alert("Bad")} rounded/></Col>
          </Row>
        </Container>


      </header>
    </div>

  );
}

export default Home;
