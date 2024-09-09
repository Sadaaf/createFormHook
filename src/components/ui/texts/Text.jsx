import styled from "styled-components";

const fontSizes = {
  sm: "0.8rem",
  md: "1.0rem",
  lg: "1.2rem",
};

const lineHeight = {
  sm: "1.3",
  md: "1.4",
  lg: "1.5",
};

const Text = styled.p`
  font-family: Arial;
  font-size: ${(props) => fontSizes[props.size] ?? "1.0rem"};
  color: #222;
  line-height: ${(props) => lineHeight[props.line] ?? 0.7};
`;

export default Text;
