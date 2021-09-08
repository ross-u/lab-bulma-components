import './App.css';
import "bulma/css/bulma.css";
import './compnents/Navbar'
import Navbar from './compnents/Navbar';
import FormField from './compnents/FormField'
import SignupForm from './compnents/SignupForm'

function App() {
  return (
    <div className="App">
      {SignupForm()}
    </div>
  );
}

export default App;
