import Navbar from "./Navbar";
import FormField from "./FormField";

function SignUpForm() {
  return (
    <form>
      <Navbar />
      <FormField label="Name" type="text" placeholder="Name" />
      <FormField label="Email" type="email" placeholder="name@name.com" />
      <FormField label="Password" type="password" placeholder="password" />
      <button class="button">Submit</button>
    </form>
  );
}

export default SignUpForm;
