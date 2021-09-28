import '../styles/globals.css'
import GlobalStyles from "../styles/global";
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
  return (
  <Fragment>
  <GlobalStyles />
  <Component {...pageProps} />
  </Fragment>
  );
}

export default MyApp
