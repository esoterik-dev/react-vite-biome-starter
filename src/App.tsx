function App() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Hello World!</h1>
      <p style={{ color: 'var(--color-text)', fontSize: '1.2rem' }}>
        Welcome to your React + TypeScript + Vite starter template.
      </p>
      <div
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '8px',
          maxWidth: '500px',
          margin: '2rem auto',
        }}
      >
        <h2 style={{ color: 'var(--color-text)', marginBottom: '1rem' }}>
          Available CSS Variables
        </h2>
        <ul style={{ textAlign: 'left', lineHeight: '1.8' }}>
          <li>
            <code style={{ color: 'var(--color-text)' }}>--color-text</code> - Main text color
          </li>
          <li>
            <code
              style={{
                color: 'var(--color-background)',
                backgroundColor: 'var(--color-text)',
                padding: '2px 4px',
                borderRadius: '4px',
              }}
            >
              --color-background
            </code>{' '}
            - Page background
          </li>
          <li>
            <code
              style={{
                color: 'var(--color-text)',
                backgroundColor: 'var(--color-surface)',
                padding: '2px 4px',
                borderRadius: '4px',
              }}
            >
              --color-surface
            </code>{' '}
            - Card/surface background
          </li>
          <li>
            <code style={{ color: 'var(--color-border)' }}>--color-border</code> - Border color
          </li>
          <li>
            <code style={{ color: 'var(--color-primary)' }}>--color-primary</code> - Primary brand
            color
          </li>
          <li>
            <code style={{ color: 'var(--color-primary-hover)' }}>--color-primary-hover</code> -
            Primary hover state
          </li>
          <li>
            <code style={{ color: 'var(--color-accent)' }}>--color-accent</code> - Accent color
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
