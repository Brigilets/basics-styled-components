import logo from "./logo.svg";
import { ThemeProvider } from "styled-components";
import "./App.css";
import "./styles.css";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";
import { AnimatedLogo, DarkButton } from "./components/Button/Button.styles";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
};
// theme privides a theme to all components using contextAPI
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <AnimatedLogo src={logo} />
        </div>
        <div className="btnGrp" >
          <StyledButton type="submit">StyledButton</StyledButton>

          <StyledButton variant="outline">StyledButton</StyledButton>

          <FancyButton as="a">Fancy button</FancyButton>

          <SubmitButton>Submit</SubmitButton>

          <DarkButton>Dark Button</DarkButton>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
