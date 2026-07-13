import { PrimaryButton } from "./buttons/Buttons";
import Divider from "./layout/Divider";
import Row from "./layout/Row";

export default function CTA() {
  return (
    <div className="cta-wrapper">
      <div style={{ border: "1px solid var(--background)", padding: "1.5rem" }}>
        <h2>Buche jetzt deinen Termin</h2>
        <Divider height={1} />
        <Row layout="space-between" maxWidth={400}>
          <span>Mo./Di./Mi./Fr.</span>
          <span>09:30 - 18:00 Uhr</span>
        </Row>
        <Row layout="space-between" maxWidth={400}>
          <span>Do.</span>
          <span>09:30 - 20:00 Uhr</span>
        </Row>
        <Row layout="space-between" maxWidth={400}>
          <span>Samstag</span>
          <span>08:00 - 16:00 Uhr</span>
        </Row>
        <Divider height={2} />
        <PrimaryButton
          label="Termin buchen"
          target="/termin-buchen"
          width="fit-content"
        />
      </div>
    </div>
  );
}
