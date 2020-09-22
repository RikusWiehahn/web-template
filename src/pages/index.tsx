import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../templates/Layout';
import { routes } from '../config/_routes';

export default function Home() {
  return (
    <Layout title="Home" header="web app">
      <div>
        <h1 className="mt-5">Home Page</h1>
        <Link href={routes.ADMIN}>
          <a>Admin Page</a>
        </Link>
        <div style={{ height: 600, width: 200 }} className="bg-secondary" />
      </div>
    </Layout>
  );
}
