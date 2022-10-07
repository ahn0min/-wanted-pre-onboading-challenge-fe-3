import { createContext, Dispatch, SetStateAction } from "react";

interface RouterContextType {
  path: string;
  setPath: Dispatch<SetStateAction<string>>;
}

// context의 초기값을 통한 생성
const routerContext = createContext<RouterContextType>({
  path: "/",
  setPath: () => undefined,
});

export default routerContext;
