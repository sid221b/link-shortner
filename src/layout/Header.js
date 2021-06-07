import styled from "styled-components";
import { Button, Link } from "../styledElements";
import Logo from "../assets/images/logo.svg";

const StyledNavbar = styled.nav`
  padding-top: 8px;
  padding-bottom: 25px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  > div {
    display: flex;
    align-items: center;
    > *:not(:first-child) {
      margin-left: clamp(15px, 15%, 25px);
    }
  }
`;

const Header = () => {
  return (
    <StyledNavbar>
      <div>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/resources">Resources</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </StyledNavbar>
  );
};
export default Header;
