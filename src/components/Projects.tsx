const projects = [
  { title: 'Project 1', desc: 'SQL & Database Optimization' },
  { title: 'Project 2', desc: 'Python Data Visualization' },
  { title: 'Project 3', desc: 'Dashboard Development' },
];

export default function Projects() {
  return (
    <section style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((p, i) => (
          <div key={i} style={{ border: '1px solid #333', padding: '1.5rem', borderRadius: '8px' }}>
            <h3>{p.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
