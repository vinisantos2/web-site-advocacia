import Head from 'next/head';

interface PageHeadProps {
  title: string;
  description?: string;
}

const MetaHead = ({ title, description = 'Escritório de advocacia especializado em diversas áreas do direito.' }: PageHeadProps) => {
  return (
    <Head>
      <title>{title} | Escritório Legal</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaHead;
