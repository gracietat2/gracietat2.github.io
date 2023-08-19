import Link from 'next/link';
import Head from 'next/head';


export default function about() {
    return (
      <>
        <Head>
          <title>Aftercare</title>
        </Head>

        <h1>Aftercare</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </>
    );
  }