import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header className="header">
      <img src={LOGO_URL} className="appLogo" />
      <nav className="navlist">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
