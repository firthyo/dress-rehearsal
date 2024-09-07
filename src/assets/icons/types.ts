import { MyTheme } from "styles/Theme";

type ColorKeys = keyof MyTheme["colors"];

export type IconProps = {
  size?: number;
  color?: string;
  themeColor?: ColorKeys;
  fill?: string;
};
