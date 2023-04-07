import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../globalstyles'

const theme: DefaultTheme = {
  primary:"#040714",
  secondary: "#0070f3",
};

function MyApp({ Component, pageProps }: AppProps) {

  return (
  
  <ThemeProvider theme={theme}>
    <GlobalStyle  />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
