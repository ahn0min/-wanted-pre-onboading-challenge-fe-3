export interface RouteProps {
  to: string;
  component: React.ReactElement;
}
// useContext를 통해서 props가 아닌 전역상태에서 참조를 한다.
export default function Route({ to, component }: RouteProps) {
  return null;
}
