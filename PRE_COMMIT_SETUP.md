# Pre-commit Setup Documentation

## What's Configured

This project uses **Husky** and **lint-staged** to ensure code quality before commits and pushes.

### Pre-commit Hook
Runs automatically before each commit and processes only staged files:

- **TypeScript/JavaScript files** (`.ts`, `.tsx`, `.js`, `.jsx`):
  - Biome formatting and linting with auto-fixes
  - ESLint with auto-fixes (including newline before return statements)

- **JSON files** (`.json`, `.jsonc`):
  - Biome formatting

- **CSS files** (`.css`, `.scss`, `.sass`):
  - Biome formatting

- **HTML files** (`.html`, `.htm`):
  - Biome formatting

### Pre-push Hook
Runs before pushing to remote repository:
- Full project linting check (`bun run lint-ci`)
- TypeScript build check (`bun run build`)

## How It Works

1. **Stage your files**: `git add .`
2. **Commit**: `git commit -m "your message"`
   - Pre-commit hook automatically runs lint-staged
   - Only staged files are processed
   - Auto-fixes are applied and re-staged
3. **Push**: `git push`
   - Pre-push hook runs full project checks

## Manual Commands

You can run these commands manually:

```bash
# Run lint-staged on staged files
bunx lint-staged

# Run full project linting
bun run lint-ci

# Run linting with auto-fixes
bun run lint-fix

# Run only ESLint
bun run lint:eslint

# Run only ESLint with fixes
bun run lint:eslint-fix
```

## Bypassing Hooks (Emergency Only)

```bash
# Skip pre-commit hook
git commit --no-verify -m "emergency commit"

# Skip pre-push hook
git push --no-verify
```

## File Structure

```
.husky/
├── pre-commit       # Runs lint-staged
├── pre-push         # Runs full linting and build
└── commit-msg       # Optional commit message validation
```

The configuration for lint-staged is in `package.json` under the `"lint-staged"` key.
