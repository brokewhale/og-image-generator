import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Scss/Rainbow.module.scss";
import { useRouter } from "next/router";
import { Globe, Logo, Twitter, Vector1, Vector2 } from "../../Components/Icons";
const Type: NextPage = () => {
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
                <div className={styles.title}>Frontend to Web3</div>
                <div className={styles.description}>
                  A guide to learning the needed skills to transition into Web3
                  as a frontend developer.
                </div>
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

export default Type;
