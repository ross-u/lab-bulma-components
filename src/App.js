import './App.css';
import 'bulma/css/bulma.css'
import { Navbar } from './components/Navbar';
import FormField from './components/FormField';
import SignupForm from './components/SignupForm';
import { CoolButton } from './components/CoolButton';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <FormField head="Name" label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField head="Email" label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <SignupForm />
              <CoolButton isSmall is Danger isRounded>Button1</CoolButton>
                <CoolButton isSmall isSuccess>Button2</CoolButton>
      </div>
  )
}

export default App;
