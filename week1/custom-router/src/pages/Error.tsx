import Container from "../components/Container";
import PushButton from "../components/PushButton";

export default function Error() {
  return (
    <Container>
      <div>Error</div>
      <PushButton to="/" text="go home" />
    </Container>
  );
}
