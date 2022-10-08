import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import getPostIdList from "../util/getPostIdList";
// import { getStaticProps } from "./post/[id]";

interface HomeProps {
  postIds: string[];
}

const Home: NextPage<HomeProps> = ({ postIds }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        여기에 포스트 목록을 다 보여주자 link tag를 통해 게시물 전체를
        보여줘야지
        {postIds.map((postId) => (
          <Link key={postId} href={`post/${postId}`}>
            <a>{postId}</a>
          </Link>
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postIds = getPostIdList();
  return {
    props: { postIds },
  };
};

export default Home;

{
  /* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */
}
