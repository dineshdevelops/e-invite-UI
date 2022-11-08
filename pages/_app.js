import '../styles/globals.css'
import Layout from '../components/LayOut/CommonLayOut'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
