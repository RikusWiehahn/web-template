import Head from 'next/head';
import Link from 'next/link';

export default function Admin() {
  return (
    <div className="container">
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <Link href="/">
            <a>Home</a>
          </Link>
        </h1>
      </main>
    </div>
  );
}
