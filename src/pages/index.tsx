import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../templates/Layout';
import { Container } from 'react-bootstrap';
import { routes } from '../config/_routes';

export default function Home() {
  return (
    <Layout title="Home">
      <Container>
        <h1 className="mt-5">Home Page</h1>
        <Link href={routes.ADMIN}>
          <a>Admin Page</a>
        </Link>
      </Container>
    </Layout>
  );
}
