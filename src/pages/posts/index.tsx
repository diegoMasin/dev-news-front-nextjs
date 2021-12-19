import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";

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
              familiar with Flexbox. It is an opt-in CSS tool that enables you
              to build layouts based on columns and rows.
            </p>
          </a>
          <a href="#">
            <time>19 de Dezembro de 2021</time>
            <strong>A guide to Flexbox properties in React Native</strong>
            <p>
              If you have a web design and/or development background, you may be
              familiar with Flexbox. It is an opt-in CSS tool that enables you
              to build layouts based on columns and rows.
            </p>
          </a>
          <a href="#">
            <time>19 de Dezembro de 2021</time>
            <strong>A guide to Flexbox properties in React Native</strong>
            <p>
              If you have a web design and/or development background, you may be
              familiar with Flexbox. It is an opt-in CSS tool that enables you
              to build layouts based on columns and rows.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

// Building a static page and update each 60 min. This Consumes less internet.
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    // Same type saved in Prismic.io
    [Prismic.predicates.at("document.type", "post")],
    {
      fetch: ["post.title", "post.content"],
      pageSize: 100,
    }
  );

  console.log(response);

  return {
    props: {},
  };
};
