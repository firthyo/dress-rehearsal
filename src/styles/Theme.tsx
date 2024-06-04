import { ThemeProvider, DefaultTheme } from "styled-components";

type ThemeProps = {
  children: React.ReactNode;
};

// Define the structure of your theme
export interface MyTheme extends DefaultTheme {
  colors: {
    primary: string;
    secondary: string;
    surface: string;
    ternary: string;
    systemLight: string;
    systemDark: string;
    systemGrey: string;
    info: string;
  };
  fontWeight: {
    medium: number;
    semiBold: number;
  };
  fontSizes: {
    title: string;
    h1: string;
    body: string;
    detail: string;
  };
}

// Declare your theme object
const theme: MyTheme = {
  colors: {
    primary: "#684F3B",
    secondary: "#BCB0A0",
    surface: "#FFFAF1",
    ternary: "#EDE3DA",
    systemLight: "#fff",
    systemDark: "#000",
    systemGrey: "#A5A5A5",
    info: "#0077cc",
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
