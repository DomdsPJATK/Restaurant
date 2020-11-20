import React from 'react';
import HomePage from './HomePage';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from '../globalStyles/GlobalStyles';
import DetailsPage from './DetailsPage';
import AddClientPage from './AddClientPage';
import ClientsPage from './ClientsPage';
import ChooseClientPage from './ChooseClientPage';
import AddTablePage from './AddTablePage';
import ClientDetailsPage from './ClientDetailsPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/details">
              <DetailsPage />
            </Route>
            <Route exact path="/clientForm">
              <AddClientPage />
            </Route>
            <Route exact path="/clients">
              <ClientsPage />
            </Route>
            <Route exact path="/details/chooseClient">
              <ChooseClientPage />
            </Route>
            <Route exact path="/tableForm">
              <AddTablePage />
            </Route>
            <Route exact path="/clientDetails">
              <ClientDetailsPage />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
