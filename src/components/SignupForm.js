import Navbar from "./Navbar";
import FormField from "./FormField";

export default function SignupForm() {
  return (
    <div>
      <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" placeholder="*****" />
      </form>
    </div>
  );
}
