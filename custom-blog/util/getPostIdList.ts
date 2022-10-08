import path from "path";
import fs from "fs";

const getPostIdList = () => {
  const baseDirectory = process.cwd();
  const fullPath = path.join(baseDirectory, "__posts");
  const fileFullNameList = fs.readdirSync(fullPath, "utf-8");

  const fileIdList = fileFullNameList.map((fileFullName) => {
    const fileId = fileFullName.replace(/\.md*/, "");
    return fileId;
  });

  return fileIdList;
};

export default getPostIdList;
