import './styles/global.css';
import styles from './App.module.css';

// Each component lives in its own folder with its own .module.css
import Header  from './components/Header';
import Button  from './components/Button';
import Card    from './components/Card';
import Badge   from './components/Badge';
import Avatar  from './components/Avatar';
// import Alert   from './components/Alert';

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <div className={styles.app}>
      <Header
        title="CSS Modules Demo"
        subtitle="Every component has its own scoped stylesheet"
        sticky
      />

      <main className={styles.main}>

        {/* ── Buttons ─────────────────────────────── */}
        <Section title="Button">
          <div className={styles.row}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
          <div className={styles.row}>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
        </Section>

        {/* ── Badges ──────────────────────────────── */}
        <Section title="Badge">
          <div className={styles.row}>
            <Badge color="purple">Design</Badge>
            <Badge color="green" dot>Live</Badge>
            <Badge color="red">Critical</Badge>
            <Badge color="yellow">Warning</Badge>
            <Badge color="blue">New</Badge>
            <Badge color="gray">Draft</Badge>
          </div>
        </Section>

        {/* ── Avatars ─────────────────────────────── */}
        <Section title="Avatar">
          <div className={styles.row}>
            <Avatar name="Alice Johnson" size="sm" status="online" />
            <Avatar name="Bob Smith"    size="md" status="busy" />
            <Avatar name="Carol White" size="lg" status="offline" />
            <Avatar
              src="https://i.pravatar.cc/150?img=3"
              name="Dave Brown"
              size="md"
              status="online"
            />
          </div>
        </Section>

        {/* ── Alerts ──────────────────────────────── */}
        <Section title="Alert">
          <Alert type="info"    title="Information">
            CSS Modules scope your class names automatically — no BEM required.
          </Alert>
          <Alert type="success" title="Build passed!" dismissible>
            All 42 tests passed in 1.3 s. Your components are production-ready.
          </Alert>
          <Alert type="warning" title="Heads up" dismissible>
            Using global class names like <code>.button</code> can cause collisions across components.
          </Alert>
          <Alert type="error" title="Conflict detected">
            Two components defined the same class name. With CSS Modules this can't happen.
          </Alert>
        </Section>

        {/* ── Cards ───────────────────────────────── */}
        <Section title="Card">
          <div className={styles.cardGrid}>
            <Card
              image="https://picsum.photos/seed/react/400/200"
              title="Component Architecture"
              description="Split your UI into small, focused pieces — each with its own styles, logic, and tests. CSS Modules keep styles co-located without leaking."
              footer={
                <>
                  <Badge color="purple">React</Badge>
                  <Button variant="ghost" size="sm">Read more</Button>
                </>
              }
            />
            <Card
              image="https://picsum.photos/seed/css/400/200"
              title="Scoped Stylesheets"
              description="Every .module.css file is local by default. The build tool transforms class names into unique hashes — zero naming conflicts, ever."
              elevated
              footer={
                <>
                  <Badge color="blue">CSS</Badge>
                  <Button variant="primary" size="sm">Learn more</Button>
                </>
              }
            />
            <Card
              image="https://picsum.photos/seed/vite/400/200"
              title="Zero Config with Vite"
              description="Vite supports CSS Modules out of the box — just name your file *.module.css and import it. No webpack plugins needed."
              footer={
                <>
                  <Badge color="green">Vite</Badge>
                  <Button variant="secondary" size="sm">Explore</Button>
                </>
              }
            />
          </div>

          {/* Horizontal card variant */}
          <Card
            horizontal
            image="https://picsum.photos/seed/module/400/300"
            title="Horizontal Card Variant"
            description="Pass the 'horizontal' prop to flip the layout. The same component, the same CSS Module — just a different class applied conditionally."
            footer={
              <>
                <Badge color="yellow">Variant</Badge>
                <Avatar name="Design Team" size="sm" />
              </>
            }
          />
        </Section>

      </main>

      <footer className={styles.footer}>
        Built with React + CSS Modules — every class name is scoped 🔒
      </footer>
    </div>
  );
}
