import Link from 'next/link';
import Head from 'next/head';


export default function about() {
    return (
      <>
        <Head>
          <title>About</title>
        </Head>

        <h1>Gracie</h1>
        <p>Description</p>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </>
    );
  }