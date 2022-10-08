import Container from "../components/Container";
import PushButton from "../components/PushButton";

export default function Main() {
  return (
    <Container>
      <div>Root</div>
      <PushButton to="/about" text="about" />
    </Container>
  );
}
