import Container from "../components/Container";
import PushButton from "../components/PushButton";

export default function About() {
  return (
    <Container>
      <div>About</div>
      <PushButton to="/" text="go Main" />
    </Container>
  );
}
