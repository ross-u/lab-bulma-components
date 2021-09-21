import FormField from "./FormField";
import Navbar from "./Navbar";


function SignupForm(){
    return (
<div>
        <Navbar />
    <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="text" placeholder="e.g alexsmith@gmail.com" />
        <FormField label="Password" type="text" placeholder="********" />
        <button>Submit</button>
    </form>
</div>
    )
}

export default SignupForm