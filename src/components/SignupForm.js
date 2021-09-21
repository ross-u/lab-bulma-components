import FormField from "./FormField"
import { Navbar } from "./Navbar"
import 'bulma/css/bulma.css'
import { CoolButton } from './CoolButton';

const SignupForm = () => {
  return (
    <div>
      <Navbar />
      <form>
          <FormField head="Name" label="Name" type="text" placeholder="Alex Smith" />
          <FormField head="Email" label="Email" type="email" placeholder="alexsmith@gmail.com" />
          <FormField head="Password" label="password" type="password" placeholder="jfaie?{232jiodsL" />
          
          <CoolButton isSuccess className="is-rounded my-class">
          Submit
        </CoolButton>
      </form>
    </div>
  )
}

export default SignupForm