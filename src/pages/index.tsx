import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../components/Layout';
import { routes } from '../config/_routes';

export default function Home() {
  return (
    <Layout title="Sentence Splitter" header="Sentence Splitter">
      <div className="pt-5">Home</div>
    </Layout>
  );
}
