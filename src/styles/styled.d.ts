import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
      elementColor: string,
      backgroundColor: string,
      textColor: string,
      imageBottomBorder: string,
    }
}
