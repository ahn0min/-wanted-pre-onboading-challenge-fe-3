import { useContext } from "react";
import routerContext from "../context/routerContext";
import useRouter from "../hooks/useRouter";

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

export default function Link({ to, children }: LinkProps) {
  const { setPath } = useContext(routerContext);

  const push = useRouter({ to, setPath });
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    push();
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
