import '../styles/globals.scss';
import Layout from './../components/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Constantin Gabriel Ursache - full stack developer | HTML | SASS | RUBY | JAVASCRIPT | RAILS | REACT | NEXT | POSTGRESQL | MONGODB</title>
        <meta 
          name='description'
          content='Portfolio of the full stack web developer Constantin Gabriel Ursache'
        />
        <meta 
          name="viewport" 
          content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
        />
        <meta 
          name="keywords"
          content="romanian, web, webapp, application, dev, developer, fullstack, front-end, back-end, bacau, romania, html, css, sass, javascript, ruby, rails, react, nodejs, nextjs"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
