import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <div>hello <Component {...pageProps} /></div>
}

export default MyApp
