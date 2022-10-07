import React, { useContext } from "react";
import routerContext from "../context/routerContext";
import Error from "../pages/Error";

interface RouterProps {
  pathName?: string;
  children?: React.ReactElement[];
}

// "/"가 붙어서 문제인가?

export default function Router({ pathName = "/", children }: RouterProps) {
  const { path } = useContext(routerContext);
  // 초기 element를 Error로 저장
  let element = <Error />;

  React.Children.forEach(children, (child, _) => {
    if (child?.props.to === path) element = child.props.component;
  });

  return element;
}
