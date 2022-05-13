import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  elementColor: 'white',
  backgroundColor: 'hsl(0, 0%, 98%)',
  textColor: 'hsl(200, 15%, 8%)',
  imageBottomBorder: '0.1px solid  hsl(0, 0%, 95%)',
};

export const darkTheme: DefaultTheme = {
  elementColor: 'hsl(209, 23%, 22%)',
  backgroundColor: 'hsl(207, 26%, 17%)',
  textColor: 'white',
  imageBottomBorder: '0.1px solid  hsl(207, 3%, 28%)',
};
