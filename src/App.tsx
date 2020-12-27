import React, { useState, useEffect } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { ContentList } from './Cmps/ContentList';
import { localStorageService } from './services/localStorageService';


export const App: React.FC = () => {

  const [currUser, setCurrUser] = useState<{name: string, watchList: string[]}>({name: "Adi", watchList: ["tt0944947"]});
  const [currTitles, setCurrTitles] = useState<{}[]>([]);


  
  return (
    <div className="App">
   <Navbar bg="dark" variant="dark">
  <Navbar.Brand style={{color: "red"}}>Netflix Library</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Hello {currUser.name ? currUser.name : "Guest"}
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>

<Container style={{backgroundColor: "red"}}>
  <Row>
    <Col><ContentList titles={currTitles}/></Col>
    {currUser.watchList[0] ? <Col><ContentList titles={currUser.watchList}/></Col> : ''}
  </Row>
</Container>
    </div>
  );
}


