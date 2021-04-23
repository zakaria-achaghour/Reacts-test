import Contact from './components/contacts/Contact';
import NavBar from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar title="Contact list" />
      
      
      <Contact />
      <Contact name="zakaria" tel="06 358 282" email="z@email.com" />
      <Contact name="aziz" tel="06 8 282" email="a@email.com" />
      <Contact name="mjide" tel="06 358 " email="m@email.com" />

    </div>
  );
}

export default App;
