import React from 'react';
import './App.css';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';




const Body = styled.div`
  background-color:#282c34;
  min-height:50vh;
  display:flex;
  flex-direction:colum;
  align-items:center;
  justify-content:center;
  // font-size:calc(10px + 2vmin);
  color:white;
  padding:20px;

  @media(min-width: 400px) {
    background-color:green;
  }

  @media(min-width: 600px) {
    background-color:lightgreen;
  }

  @media(min-width:1024px) {
    background-color:darkgreen;
  }
`;


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>Responsive React App</h1>
        <p>This is a simple example of a responsive design using CSS-in-JS.</p>
      </header>
      <Body>
        <p>This is a simple example of a responsive design using styled components</p>
      </Body>
      <div style={{ backgroundColor: 'lightblue', width: '100%' }}>
        <Container >
          <Row>
            <Col xs={12} md={8}>
              <h1>Responsive Colum 1</h1>
            </Col>
            <Col xs={6} md={4}>
              <h2>Responsive Colum 2</h2>
            </Col>
            <Col xs={6} md={4}>
              <h2>Responsive Colum 2</h2>
            </Col>
            <Col xs={4} md={2}>
              <h4>Responsive Colum 3</h4>
            </Col>
            <Col xs={4} md={2}>
              <h4>Responsive Colum 3</h4>
            </Col>
            <Col xs={4} md={2}>
              <h4>Responsive Colum 3</h4>
            </Col>
            <Col xs={4} md={2}>
              <h4>Responsive Colum 3</h4>
            </Col>

          </Row>
        </Container>

      </div>

    </div>
  );
}

export default App;
