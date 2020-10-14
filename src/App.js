import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//class component
class App extends React.Component {
  //render method governs the return 
  render() {

    //embeded components onto the page and added a Nav bar 
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/sport">sport</Nav.Link>
              <Nav.Link href="/travel">Travel</Nav.Link>
            </Nav>
          </Navbar>
          {// when clicking nav links this will show different components 
          }
          <Switch>
            <Route path='/' component={Content} exact></Route>
            <Route path='/sport' component={Header} exact></Route>
            <Route path='/travel' component={Footer} exact></Route>
          </Switch>

          {/* <Header></Header>
        <Content></Content>
       <Footer></Footer>*/}

        </div>
      </Router>
    );
  }
}
export default App;
