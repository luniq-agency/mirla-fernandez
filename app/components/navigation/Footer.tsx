import Logo from "../brand/Logo";
import Column from "../layout/Column";
import Divider from "../layout/Divider";
import Grid from "../layout/Grid";
import { FooterLink } from "./FooterLink";
import styles from "./Navigation.module.css";

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <Grid columns={3} gap="2rem">
          <div className="column">
            <Logo inverted={true} />
            <Divider height={1} />
            <span>Ritterstrasse 4</span>
            <span>77652 Offenburg</span>
          </div>
          <Column gap={0.5}>
            <span className={styles.footerHeader}>Öffnungszeiten</span>
            <Divider height={0.5} />
            <span>Mo. 09:30 - 18:00</span>
            <span>Di. 09:30 - 18:00</span>
            <span>Mi. 09:30 - 18:00</span>
            <span>Do. 09:30 - 20:00</span>
            <span>Fr. 09:30 - 18:00</span>
            <span>Sa. 08:00 - 16:00</span>
          </Column>
          <Column gap={0.5}>
            <span className={styles.footerHeader}>Unsere Akademie</span>
            <Divider height={0.5} />
            <FooterLink label="Leistungen" target="#leistungen" />
            <FooterLink label="Über uns" target="#ueber-uns" />
            <FooterLink label="Team" target="#team" />
          </Column>
        </Grid>
      </div>
    </footer>
  );
}
