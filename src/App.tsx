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
          padding: '1.5rem 1.25rem',
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '8px',
          maxWidth: '520px',
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
            <code style={{ color: 'var(--color-text-muted)' }}>--color-text-muted</code> -
            Secondary/placeholder text
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
            - Main page background
          </li>
          <li>
            <code
              style={{
                color: 'var(--color-text)',
                backgroundColor: 'var(--color-background-secondary)',
                padding: '2px 4px',
                borderRadius: '4px',
              }}
            >
              --color-background-secondary
            </code>{' '}
            - Secondary sections
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
            - Cards/components (current background)
          </li>
          <li>
            <code
              style={{
                color: 'var(--color-text)',
                border: '2px solid var(--color-border)',
                padding: '2px 4px',
                borderRadius: '4px',
              }}
            >
              --color-border
            </code>{' '}
            - Borders
          </li>
          <li>
            <code style={{ color: 'var(--color-primary)' }}>--color-primary</code> - Brand color
          </li>
          <li>
            <code style={{ color: 'var(--color-primary-hover)' }}>--color-primary-hover</code> -
            Hover states
          </li>
          <li>
            <code style={{ color: 'var(--color-success)' }}>--color-success</code> - Success states
          </li>
          <li>
            <code style={{ color: 'var(--color-warning)' }}>--color-warning</code> - Warnings
          </li>
          <li>
            <code style={{ color: 'var(--color-error)' }}>--color-error</code> - Errors
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
