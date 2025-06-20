import React from 'react';
import './App.css';
import { Entry } from './pages/entry/EntryPage';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/DashboardPage';
import { AddTicket } from './pages/new-ticket/AddTicketPage';
import { TicketListsPage } from './pages/ticket-list/TicketListsPage';
import { Ticket } from './pages/ticket/TicketPage';
import { BrowserRouter as Router,
        Switch,
        Route,
        Link
 } from 'react-router-dom';
import { PrivateRoute } from './components/private-route/PrivateRouteComp';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><Entry /></Route>
            <PrivateRoute path='/dashboard'><Dashboard /> </PrivateRoute>
            <PrivateRoute path='/add-ticket'><AddTicket /></PrivateRoute>
            <PrivateRoute path='/tickets'> <TicketListsPage /></PrivateRoute>
            <PrivateRoute path='/ticket/:tId'> <Ticket /></PrivateRoute>

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
