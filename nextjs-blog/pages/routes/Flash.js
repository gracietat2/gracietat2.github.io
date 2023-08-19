import Link from 'next/link';
import Head from 'next/head';


export default function about() {
    return (
      <>
        <Head>
          <title>Flash</title>
        </Head>

        <h1>Flash</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </>
    );
  }