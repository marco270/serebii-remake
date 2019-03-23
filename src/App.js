import React, { Component, Fragment } from 'react';
import styles from './App.module.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Container from './Layout/Container/Container';
import Forums from './Pages/Forums/Forums';
import Games from './Pages/Games/Games';
import Home from './Pages/Home/Home';
import Media from './Pages/Media/Media';
import Navbar from './Layout/Navbar/Navbar';
import News from './Pages/News/News';
import Pokedex from './Pages/Pokedex/Pokedex';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.appBackground}>
          <Navbar />
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/games" component={Games} />
            <Route path="/media" component={Media} />
            <Route path="/pokedex" component={Pokedex} />
            <Route path="/forums" component={Forums} />
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
