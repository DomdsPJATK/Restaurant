import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChangeClientReservation from '../components/ChangeClientReservation/ChangeClientReservation';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import { GlobalStyle } from '../globalStyles/GlobalStyles';
import AddClientPage from './AddClientPage';
import AddReservationsPage from './AddReservationPage';
import AddTablePage from './AddTablePage';
import ChooseClientPage from './ChooseClientPage';
import ClientDetailsPage from './ClientDetailsPage';
import ClientsPage from './ClientsPage';
import DetailsPage from './DetailsPage';
import HomePage from './HomePage';
import ReservationsPage from './ReservationsPage';
import axios from 'axios';

const App = () => {

  axios.defaults.baseURL = "http://localhost:9000";
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
            <Route exact path="/reservations">
              <ReservationsPage />
            </Route>
            <Route exact path="/addReservation">
              <AddReservationsPage />
            </Route>
            <Route exact path="/changeReservation">
              <ChangeClientReservation />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
