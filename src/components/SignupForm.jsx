import "bulma/css/bulma.css";
import Navbar from "./Navbar";
import FormField from "./FormField";

export default function SignupForm () {
    return (
        <>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="e.g. ********" />
        <p class="control">
            <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
              <span class="icon">
                <i class="fas fa-download"></i>
              </span>
              <span>Submit</span>
            </a>
          </p>
        </>
    )
}