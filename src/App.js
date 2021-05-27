import "./styles.css";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";

export default function App() {
  return (
    <>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </>
  );
}
