import React from 'react';
import './App.css';
import { Entry } from './pages/entry/EntryPage';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/DashboardPage';
import { AddTicket } from './pages/new-ticket/AddTicketPage';
import { TicketListsPage } from './pages/ticket-list/TicketListsPage';


function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketListsPage />
        
      </DefaultLayout>
    </div>
  );
}

export default App;
