import { Dispatch, SetStateAction } from "react";

interface useRouterProps {
  to: string;
  setPath: Dispatch<SetStateAction<string>>;
}

export default function useRouter({ to, setPath }: useRouterProps): () => void {
  // const { setPath } = useContext(routerContext);
  // hooks 내부적으로 관리하면 routerContext가 아닌 경우에는 사용할 수 없지않을까?
  const pushURL = () => {
    window.history.pushState({ to }, "", to);
    // 문자열의 처음부터 탐색하여 / 가 0개이상 있는 경우 / 하나로 0개 인경우 1개로 변경
    const baseURL = to.replace(/^\/*/, "/");
    setPath(baseURL);
  };
  return pushURL;
}
