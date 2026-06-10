export default function Contact() {
  return (
    <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact Me</h2>
      <p style={{ color: 'var(--text-secondary)' }}>Feel free to reach out via:</p>
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
        <a href="mailto:email@example.com">Email</a>
      </div>
    </section>
  );
}
