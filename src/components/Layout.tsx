import Head from 'next/head';
import Navbar from './Navbar';
import seo from '@/lib/data/seo';
import styles from '@/styles/components/Layout.module.scss';


const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={seo.keywords} />
        <meta name='description' content={seo.description} />
        <link rel='icon' type='image/png' href='/next-math-puzzle.png' />
        <title>{seo.title}</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
};

export default Layout;
