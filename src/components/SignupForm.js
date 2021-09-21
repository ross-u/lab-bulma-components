
import CoolButton from "./CoolButton";
import FormField from "./FormField";
import Navbar from "./Navbar";


function SignUpForm() {


    return(


<>
        <Navbar/>
        
 <form action="">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <FormField label="Password" type="password" placeholder="***" />
    <CoolButton isSuccess >Button 1</CoolButton>
    <CoolButton> Button 2 </CoolButton>
 </form>
</>
    )
}

export default SignUpForm