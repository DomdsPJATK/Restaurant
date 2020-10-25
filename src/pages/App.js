import React from 'react';
import HomePage from './HomePage';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from '../globalStyles/GlobalStyles';
import DetailsPage from './DetailsPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/details">
              <DetailsPage />
            </Route>
          </Switch>
        </Router>
      </Main>
      <Footer />
    </>
  );
}

export default App;
