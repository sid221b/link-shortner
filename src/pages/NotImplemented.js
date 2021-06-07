import styled from "styled-components";
import { Layout } from "../layout";
import { Button, Link } from "../styledElements";

const StyledNotImplemented = styled.main`
  text-align: center;
  color: #bfbfbf;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export default function NotImplemented() {
  return (
    <Layout>
      <StyledNotImplemented>
        <h2>This page is not implemeted yet, Check again layer.</h2>
        <Link to="/">
          <Button>Go Back To Home Page</Button>
        </Link>
      </StyledNotImplemented>
    </Layout>
  );
}
