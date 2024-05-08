import { ThemeProvider } from "styled-components";

type ThemeProps = {
  children: React.ReactNode;
};

const theme = {
  colors: {
    primary: "#684F3B",
    secondary: "#BCB0A0",
    surface: "#FFFAF1",
    ternary: "#EDE3DA",
    systemLight: "#fff",
    systemDark: "#000",
    info: " #0077cc",
  },
  fontWeight: {
    medium: 500,
    semiBold: 600,
  },
  fontSizes: {
    title: "72px",
    h1: "24px",
    body: "22px",
    detail: "18px",
  },
};

const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
