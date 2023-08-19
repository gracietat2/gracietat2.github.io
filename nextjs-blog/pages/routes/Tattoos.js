import Link from 'next/link';
import Head from 'next/head';


export default function about() {
    return (
      <>
        <Head>
          <title>Tattoos</title>
        </Head>

        <h1>Tattoos</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </>
    );
  }