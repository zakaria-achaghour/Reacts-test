import Contacts from './components/contacts/Contacts';
import NavBar from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar title="Contact list" />
      <Contacts />
    </div>
  );
}

export default App;
