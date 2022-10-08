import { GetStaticPaths, GetStaticProps } from "next";
import markdownToHtml from "../../util/markdownToHtml";
import getPostIdList from "../../util/getPostIdList";
import getPostsData from "../../util/getPostData";
import createMarkUp from "../../util/createMarkUp";
import Head from "next/head";

// 페이지 [] 안의 문자와 getStaticPaths의 params내부의 값은 같아야한다.
// getStaticProps의 매개변수는 객체형태이며

// params로 id값을 받게되면 pathname과 비교해서 일치하는것을 getStaticProps의 context내부에 넣어주는 것이 아닐까?
// 그리고 그걸 받아서 getStaticProps는 데이터를 가공을해서 UI Component의 props로 전달해주는 것이다.

// getStaticProps를 통해 전달받은 props를 통해 실제 페이지 UI가 담기는 부분

interface PostDetailProps {
  content: string;
  data: PostDataType;
}

interface PostDataType {
  categories: string;
  date: string;
  description: string;
  slug: string;
  tags: string;
  title: string;
}
export default function PostDetail({ content, data }: PostDetailProps) {
  return (
    <>
      <Head>
        <title>AYM BLOG</title>
        <meta name="description" content="ahnyeongmin blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div dangerouslySetInnerHTML={createMarkUp(content)} />
      <div>{data.title}</div>
    </>
  );
}

// SSG 할 때 동적으로 파일의 경로를 생성하는 부분 이 경우 생성된 경로 이외에는 404 page를 보여준다.
export const getStaticPaths: GetStaticPaths = async () => {
  const postIds = getPostIdList();
  const params = postIds.map((postId) => ({ params: { id: postId } }));
  return {
    paths: [...params],
    fallback: false,
  };
};

// SSG 할 때 필요한 props를 받아오는 부분
// 각각의 id에 맞는 정보를 props로 전달해주는 부분
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const postData = getPostsData(id);
  const result = await markdownToHtml(postData.content);

  return {
    props: {
      data: postData.data,
      content: result.value,
    },
  };
};
