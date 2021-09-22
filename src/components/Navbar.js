import "bulma/css/bulma.css";
import CoolButton from "./CoolButton";

export default function Navbar() {
  return (
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            Home
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a href="/">
                  <CoolButton isSuccess>Log In</CoolButton>
                </a>
              </p>
              <p class="control">
                <a href="/">
                  <CoolButton> SignUp</CoolButton>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
