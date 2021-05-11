import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import PageNotFound from './components/pages/PageNotFound';

import NavBar from './components/navBar/NavBar';
import {Provider} from './components/context'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
          <div className="App">
          <NavBar title="Contact list" />
            <div className="container">
                <Switch>
                  <Route exact path='/' component={Contacts}/>
                  <Route exact path='/contact/add' component={AddContact}/>
                  <Route exact path='/about/:id/:name' component={About}/>
                  <Route component={PageNotFound}/>


                </Switch>
            </div>
          </div>
      </Router>
    </Provider>
  );
}

export default App;
