import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../globalstyles'
import Header from '../components/Header';
import { SessionProvider } from 'next-auth/react';

 export const theme: DefaultTheme = {
   primary: "#040714",
   secondary: "#0070f3",
   white: '#fff',
   brightBlue: '#3E64E5',
   silver: 'silver',
   darkGrey: '#31343e'
 };

function MyApp({ Component, pageProps }: AppProps) {

  return (
  
  <ThemeProvider theme={theme}>
    <SessionProvider session={pageProps.session}>
      <GlobalStyle  />
      <Header  />
      <Component {...pageProps} />
    </SessionProvider>
  </ThemeProvider>
  )
}

export default MyApp
