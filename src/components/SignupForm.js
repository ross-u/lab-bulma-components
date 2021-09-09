import Navbar from "./Navbar";
import FormField from "./FormField";
import Button from "./Button";
import CoolButton from "./CoolButton";

const SignupForm = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: "50vw", margin: "20px" }}>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Enter Password"
        />
        <CoolButton isSuccess> Button 1 </CoolButton>
        <CoolButton> Button 2 </CoolButton>
      </div>
    </>
  );
};

export default SignupForm;
