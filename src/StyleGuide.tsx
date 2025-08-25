export const StyleGuide = () => {
  const commonBackgroundStyle = {
    padding: '2px 4px',
    borderRadius: '4px',
  };

  const commonShadowStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  } as const;

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Hello World!</h1>
      <p style={{ color: 'var(--color-text)', fontSize: '1.2rem' }}></p>
      <div
        style={{
          marginTop: '2rem',
          padding: '1.5rem 1.25rem',
          backgroundColor: 'var(--color-surface)',
          border: '2px solid var(--color-border)',
          borderRadius: '8px',
          maxWidth: '520px',
          margin: '2rem auto',
        }}
      >
        <h2 style={{ color: 'var(--color-text)', marginBottom: '1rem' }}>
          Available CSS Variables
        </h2>

        <div style={{ textAlign: 'left', lineHeight: '1.8' }}>
          <h3 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            Text & Background Colors
          </h3>
          <ul style={{ marginBottom: '1.5rem' }}>
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
                  ...commonBackgroundStyle,
                  color: 'var(--color-background)',
                  backgroundColor: 'var(--color-text)',
                }}
              >
                --color-background
              </code>{' '}
              - Main page background
            </li>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  color: 'var(--color-text)',
                  backgroundColor: 'var(--color-background-secondary)',
                }}
              >
                --color-background-secondary
              </code>{' '}
              - Secondary sections
            </li>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  color: 'var(--color-text)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                --color-surface
              </code>{' '}
              - Cards/components
            </li>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  color: 'var(--color-text)',
                  border: '2px solid var(--color-border)',
                }}
              >
                --color-border
              </code>{' '}
              - Primary borders
            </li>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  color: 'var(--color-text)',
                  border: '2px solid var(--color-border-muted)',
                }}
              >
                --color-border-muted
              </code>{' '}
              - Subtle borders
            </li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            Primary & Secondary Colors
          </h3>
          <ul style={{ marginBottom: '1.5rem' }}>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                }}
              >
                --color-primary
              </code>{' '}
              - Main brand color
            </li>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-primary-hover)',
                  color: 'white',
                }}
              >
                --color-primary-hover
              </code>{' '}
              - Primary hover state
            </li>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-primary-light)',
                  color: 'var(--color-primary)',
                }}
              >
                --color-primary-light
              </code>{' '}
              - Primary light variant
            </li>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-secondary)',
                  color: 'white',
                }}
              >
                --color-secondary
              </code>{' '}
              - Secondary color
            </li>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-secondary-hover)',
                  color: 'white',
                }}
              >
                --color-secondary-hover
              </code>{' '}
              - Secondary hover
            </li>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-secondary-light)',
                  color: 'var(--color-secondary)',
                }}
              >
                --color-secondary-light
              </code>{' '}
              - Secondary light
            </li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            Accent & Semantic Colors
          </h3>
          <ul style={{ marginBottom: '1.5rem' }}>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-accent)',
                  color: 'white',
                }}
              >
                --color-accent
              </code>{' '}
              - Accent color
            </li>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-info)',
                  color: 'white',
                }}
              >
                --color-info
              </code>{' '}
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-info-light)',
                  color: 'var(--color-info)',
                }}
              >
                --color-info-light
              </code>
            </li>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-success)',
                  color: 'white',
                }}
              >
                --color-success
              </code>{' '}
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-success-light)',
                  color: 'var(--color-success)',
                }}
              >
                --color-success-light
              </code>
            </li>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-warning)',
                  color: 'white',
                }}
              >
                --color-warning
              </code>{' '}
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-warning-light)',
                  color: 'var(--color-warning)',
                }}
              >
                --color-warning-light
              </code>
            </li>
            <li>
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-error)',
                  color: 'white',
                }}
              >
                --color-error
              </code>{' '}
              <code
                style={{
                  ...commonBackgroundStyle,
                  backgroundColor: 'var(--color-error-light)',
                  color: 'var(--color-error)',
                }}
              >
                --color-error-light
              </code>
            </li>
          </ul>

          <h3 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            Shadow System
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '1rem',
              marginBottom: '1rem',
            }}
          >
            <div style={{ ...commonShadowStyle, boxShadow: 'var(--shadow-xs)' }}>
              <code>--shadow-xs</code>
              <small>Extra Small</small>
            </div>
            <div style={{ ...commonShadowStyle, boxShadow: 'var(--shadow-sm)' }}>
              <code>--shadow-sm</code>
              <small>Small</small>
            </div>
            <div style={{ ...commonShadowStyle, boxShadow: 'var(--shadow-md)' }}>
              <code>--shadow-md</code>
              <small>Medium</small>
            </div>
            <div style={{ ...commonShadowStyle, boxShadow: 'var(--shadow-lg)' }}>
              <code>--shadow-lg</code>
              <small>Large</small>
            </div>
            <div style={{ ...commonShadowStyle, boxShadow: 'var(--shadow-xl)' }}>
              <code>--shadow-xl</code>
              <small>Extra Large</small>
            </div>
            <div style={{ ...commonShadowStyle, boxShadow: 'var(--shadow-2xl)' }}>
              <code>--shadow-2xl</code>
              <small>2X Large</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
