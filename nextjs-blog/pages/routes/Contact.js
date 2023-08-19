import Link from 'next/link';
import Head from 'next/head';


export default function about() {
    return (
      <>
        <Head>
          <title>Contact</title>
        </Head>

        <h1>FContact</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </>
    );
  }