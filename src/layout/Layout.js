import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const AppContainer = styled.div`
  background-color: #3b3054;
  padding: 0;
  margin: 0;
  > * {
    padding: 0 clamp(15px, 15%, 175px);
  }
`;

const Layout = ({ children }) => {
  return (
    <AppContainer>
      <Header />
      {children}
      <Footer />
    </AppContainer>
  );
};
export default Layout;
