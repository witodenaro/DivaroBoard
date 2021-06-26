import { Switch, Route } from 'react-router-dom';

import './App.css';

import Board from './pages/Board/Board';
import EditTicket from './pages/EditTicket/EditTicket';
import CreateTicket from './pages/CreateTicket/CreateTicket';

import Header from './components/Header/Header';

import { ROUTES } from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={ROUTES.EDIT_TICKET} component={EditTicket} />
        <Route exact path={ROUTES.HOME} component={Board} />
        <Route exact path={ROUTES.CREATE_TICKET} component={CreateTicket} />
      </Switch>
    </div>
  );
}

export default App;
