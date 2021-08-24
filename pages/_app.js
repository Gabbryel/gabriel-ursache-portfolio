import React from 'react';
import '../styles/globals.scss';
import Layout from './../components/layout';
import Head from 'next/head';
import { vh, vhOnResize } from '../helpers/vh';
import setDimensions from '../helpers/window';

function MyApp({ Component, pageProps }) {
  vh()
  vhOnResize()
  
  return (
    <Layout>
      <Head>
        <title>CGU | Full Stack developer | HTML | SASS | RUBY | JAVASCRIPT | RAILS | REACTJS | NEXTJS | POSTGRESQL | MONGODB | Freelancer</title>
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
          content="romanian, web, webapp, application, dev, developer, fullstack, front-end, back-end, bacau, romania, html, css, sass, javascript, ruby, rails, reactjs, nodejs, nextjs, remote, job"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
