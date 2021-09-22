import "./App.css";
import "bulma/css/bulma.css";
// import Navbar from "./components/Navbar";
// import FormField from "./components/FormField";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      /> */}
      <SignupForm />
    </div>
  );
}

export default App;
