import { createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, input, button{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    border: none;
    text-decoration: none;
    font-size: 62.5%;
  }


`


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
    
        <Component {...pageProps} />
    
    </>
  )
}
