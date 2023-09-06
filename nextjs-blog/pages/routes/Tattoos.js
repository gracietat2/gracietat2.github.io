import Link from 'next/link';
import Head from 'next/head';
import TatImg from '/components/TatImg.js';


export default function Tattoos() {
    return (
      <>
        <Head>
          <title>Tattoos</title>
        </Head>

        <h1>Tattoos</h1>

        <div>
      {TatImg.map((link, index) => (
        <img
          key={index}
          src={link}
          alt={`Image ${index + 1}`}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      ))}
    </div>

        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </>
    );
  }


