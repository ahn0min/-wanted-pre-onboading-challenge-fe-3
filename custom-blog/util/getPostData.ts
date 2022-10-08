import fs from "fs";
import path from "path";
import matter from "gray-matter";

// process.cwd를 통해 현재 작업 디렉토리의 주소를 반환받습니다.
// path.join을 통해 __posts 와 외부로 부터 주입받은 id.md 경로를 합쳐 줍니다.
// fs.readFlsSync를 통해 해당 경로의 파일명과 일치하는 파일을 읽어 utf8로 인코딩합니다.
// gray-matter를 통해 마크다운 형태의 content와 포스트 메타데이터인 data로 이루어진객체로 반환받습니다.
// 여기서 바로 html로 변경해줄 수 있지 않을까?

// 그러기에는 해당 함수가 하는 역할이 너무 커짐으로 분리해주자.
// markdownToHtml 파일로 분리해주었다.

const getPostsData = (id: string) => {
  const postsData = readFileData(id);
  const jsonFileData = postsDataToJson(postsData);

  return jsonFileData;
};

const readFileData = (id: string) => {
  const baseDirectory = process.cwd();
  const fullPath = path.join(baseDirectory, "__posts", `${id}.md`);
  const fileData = fs.readFileSync(fullPath, "utf-8");

  return fileData;
};

const postsDataToJson = (fileData: string) => {
  const jsonFileData = matter(fileData);
  return jsonFileData;
};

export default getPostsData;
