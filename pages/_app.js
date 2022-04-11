import Layout from "../components/layout/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log(11111, Component);
  console.log(22222, pageProps);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
