import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Post | DevNews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>19 de Dezembro de 2021</time>
            <strong>A guide to Flexbox properties in React Native</strong>
            <p>
              If you have a web design and/or development background, you may be
              familiar with Flexbox. It's an opt-in CSS tool that enables you to
              build layouts based on columns and rows.
            </p>
          </a>
          <a href="#">
            <time>19 de Dezembro de 2021</time>
            <strong>A guide to Flexbox properties in React Native</strong>
            <p>
              If you have a web design and/or development background, you may be
              familiar with Flexbox. It's an opt-in CSS tool that enables you to
              build layouts based on columns and rows.
            </p>
          </a>
          <a href="#">
            <time>19 de Dezembro de 2021</time>
            <strong>A guide to Flexbox properties in React Native</strong>
            <p>
              If you have a web design and/or development background, you may be
              familiar with Flexbox. It's an opt-in CSS tool that enables you to
              build layouts based on columns and rows.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
