import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../globalstyles'
import Header from '../components/Header';

 export const theme: DefaultTheme = {
   primary: "#040714",
   secondary: "#0070f3",
   white: '',
   brightBlue: '',
   silver: '',
   darkGrey: ''
 };

function MyApp({ Component, pageProps }: AppProps) {

  return (
  
  <ThemeProvider theme={theme}>
    <GlobalStyle  />
    <Header  />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
