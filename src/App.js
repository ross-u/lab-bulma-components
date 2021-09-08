import './App.css';
import "./App.css";
import 'bulma/css/bulma.css'
import { Navbar } from './Navbar';
import FormField from './FormField';
import SignupForm from './SignupForm';
import { CoolButton } from './CoolButton';

function App() {
  return (
  <div className="App">
    <Navbar/>
    <FormField head="Name" label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField head="Email" label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <SignupForm></SignupForm>
    <CoolButton>Button1</CoolButton>
    <CoolButton isSuccess>Button2</CoolButton>
  </div>
  )
}
export default App;


