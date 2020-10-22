import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../components/Layout';
import { routes } from '../config/_routes';

export default function Home() {
  return (
    <Layout title="Home" header="web app">
      <div>
        <h1 className="mt-5">Home Page</h1>
        <Link href={routes.ADMIN}>
          <a>Admin Page</a>
        </Link>
      </div>
    </Layout>
  );
}
