// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    textColor: string;
    colors: {
      darkBlue: string,
      lightBlue: string,
      darkPink: string,
      lightPink: string,
      darkGrey: string,
      white: string,
      lightWhite: string,
      lightGrey: string,
      black: string,
    }
  }
}