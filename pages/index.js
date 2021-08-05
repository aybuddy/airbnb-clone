import Head from 'next/head';
import Hero from '../components/Hero';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>AirBnB</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Hero />
    </div>
  );
}
