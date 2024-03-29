import Layout from "../components/layout";
import "../styles/globals.css";
import {Analytics} from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
