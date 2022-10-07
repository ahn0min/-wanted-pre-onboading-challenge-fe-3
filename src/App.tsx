import { useCallback, useEffect, useState } from "react";
import Route from "./Router/Route";
import Router from "./Router/Router";
import Main from "./pages/Root";
import About from "./pages/About";
import "./app.css";
import routerContext from "./context/routerContext";

function App() {
  const [pathName, setPathName] = useState<string>(window.location.pathname);

  // popstate event 발생시 state를 변경하여 리렌더링
  const handlePopState = (event: PopStateEvent) =>
    setPathName(window.location.pathname);

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => window.addEventListener("popstate", handlePopState);
  });

  // Provider를 통해 자식 Component에서 접근 가능 value를 통해 초기값을 실제값으로 변경
  return (
    <div className="App">
      <routerContext.Provider value={{ path: pathName, setPath: setPathName }}>
        <Router>
          <Route to="/" component={<Main />}></Route>
          <Route to="/about" component={<About />}></Route>
        </Router>
      </routerContext.Provider>
    </div>
  );
}

export default App;
