import { DefaultTheme } from 'styled-components';

const colors = {
  darkBlue: "#001C4E",
  lightBlue: "#18A6F4",
  darkPink: "#851034",
  lightPink: "#ec4d77",
  darkGrey: "#181818",
  white: "#FFFFFF",
  lightWhite: "#FAFAFA",
  lightGrey: "#CCCCCC",
  black: "#000000"
}

export const defaultTheme: DefaultTheme = {
  background: colors.white,
  textColor: colors.black,
  colors: colors,
}