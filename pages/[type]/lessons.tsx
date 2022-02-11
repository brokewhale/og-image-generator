import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Scss/Rainbow.module.scss";
import { useRouter } from "next/router";
import { Globe, Logo, Twitter, Vector1, Vector2 } from "../../Components/Icons";
import { BsFileTextFill, BsFillPlayBtnFill } from "react-icons/bs";
const Lessons: NextPage = () => {
  const router = useRouter();

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);

  const title = searchParams.get("title") as string;
  const description = searchParams.get("description");

  function getFontSize(length: number) {
    if (length > 32) {
      return `42px`;
    }

    return `53px`;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.overlay}>
            <div className={styles.vector1}>
              <Vector1 />
            </div>
            <div className={styles.vector2}>
              <Vector2 />
            </div>

            <main className={styles.mainInfo}>
              <div className={styles.mainInfo__left}>
                <div className={styles.textBased}>
                  <span>
                    <BsFileTextFill />
                  </span>{" "}
                  Text based tutorial
                </div>
                <div
                  className={styles.title}
                  style={{
                    fontSize: `${getFontSize(title?.length)}`,
                  }}
                >
                  {title}
                </div>
                <div className={styles.description}>{description}</div>
                <div className={styles.links}>
                  <div className={styles.website}>
                    <Globe />
                    <p>https://frontend2web3.com</p>
                  </div>
                  <div className={styles.twitter}>
                    <Twitter />
                    <p>@frontend2web3</p>
                  </div>
                </div>
              </div>

              <div className={styles.mainInfo__right}>
                {/* <Image
                  src="/assets/logo.png"
                  layout="fill"
                  alt="logo"
                  objectFit="contain"
                  className={styles.mainInfo__right_img}
                /> */}
                <Logo />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lessons;

// localhost:3000/rainbow/lessons?title=Build a Wallet Connect Component using Ethers JS.&description=How to connect to a users wallet in React by using the ethers library.
