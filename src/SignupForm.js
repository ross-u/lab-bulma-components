import FormField from "./FormField"
import { Navbar } from "./Navbar"



const SignupForm = () => {
  return (
    <div>
      <Navbar />
      <form>
          <FormField head="Name" label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField head="Email" label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField head="Password" label="password" type="password" placeholder="e.g. jfaie?{232jiodsL" />
          <button>Submit</button>
      </form>
    </div>
  )
}

export default SignupForm
