import Link from "../Router/Link";
interface PushButtonProps {
  to: string;
  text: string;
}
export default function PushButton({ to, text }: PushButtonProps) {
  return (
    <Link to={to}>
      <button>{text}</button>
    </Link>
  );
}
