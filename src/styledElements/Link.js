import styled from "styled-components";
import { Link as RouteLink } from "react-router-dom";

const Link = styled(RouteLink)`
  text-decoration: none;
  color: #bfbfbf;
  img {
    display: block;
  }
`;

export default Link;
