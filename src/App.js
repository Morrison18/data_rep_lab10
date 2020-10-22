//imports
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';// path to component
import { Footer } from './components/footer';// path to component
import { Content } from './components/content';// path to component
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Read } from './components/read';// path to component
import { Create } from './components/create'; // path to component



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
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Navbar>
          {// when clicking nav links this will show different components 
          }
          <Switch>
            <Route path='/' component={Content} exact></Route>
            <Route path='/create' component={Create} exact></Route>
            <Route path='/read' component={Read} exact></Route>
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
