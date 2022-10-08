import { remark } from "remark";
import remarkHTML from "remark-html";

const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(remarkHTML).process(markdown);
  return result;
};

export default markdownToHtml;
