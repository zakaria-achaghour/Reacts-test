import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';

import NavBar from './components/navBar/NavBar';
import {Provider} from './components/context'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

function App() {
  return (
    <Provider>
    <div className="App">
    <NavBar title="Contact list" />
      <div className="container">
      <AddContact/>
      <Contacts />
      </div>
     
   
    </div>
    </Provider>
  );
}

export default App;
