import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
const Home: NextPage = () => {
  const router = useRouter();

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const link = searchParams.get("url");

  if (!link) return null;

  const linkURL = new URL(link);
  const title = searchParams.get("title");
  const date = searchParams.get("date");
  const readTime = searchParams.get("readTime");
  console.log("searchParams", linkURL);

  return (
    <>
      <div className={styles.container}>
        <div></div>
      </div>
    </>
  );
};

export default Home;
