# React + TypeScript + Vite Starter Template

A modern, production-ready React starter template with TypeScript, Vite, and comprehensive code quality tools pre-configured.

## ✨ Features

- ⚡ **Vite** - Lightning fast build tool with HMR
- ⚛️ **React 19** with TypeScript support
- 🚀 **SWC** - Super-fast TypeScript/JavaScript compilation
- 🎨 **Biome** - Ultra-fast formatter and linter
- 🔧 **ESLint** - Additional rules for React-specific patterns
- 🎯 **Husky** - Git hooks for automated code quality
- 📝 **Commitizen** - Interactive commit message prompts
- ✅ **Commitlint** - Enforce conventional commit messages
- 🔍 **lint-staged** - Run linters on staged files only
- 📦 **Bun** - Fast package manager and runtime

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd react-vite-biome

# Install dependencies
bun install

# Start development server
bun run dev
```

The development server will automatically open at `http://localhost:5173`

## 📦 Available Scripts

### Development

```bash
bun run dev          # Start development server with HMR
bun run preview      # Preview production build locally
```

### Building

```bash
bun run build        # Build for production
```

### Code Quality

```bash
bun run format       # Format code with Biome
bun run lint         # Check linting and formatting
bun run lint-fix     # Fix auto-fixable linting issues
bun run lint-ci      # Run all checks (used in CI)
```

### Git Workflow

```bash
bun run commit       # Interactive commit with Commitizen
```

## 🛠️ Code Quality Setup

### Biome Configuration

This template uses [Biome](https://biomejs.dev/) as the primary formatter and linter for optimal performance:

- **Formatting**: 100 character line width, single quotes, trailing commas
- **Linting**: Recommended rules with React-specific customizations
- **Import organization**: Automatic import sorting and organization
- **File support**: TypeScript, JavaScript, JSON, CSS, HTML

### ESLint Integration

ESLint complements Biome with additional React-specific rules:

- React Hooks rules enforcement
- React Refresh compatibility
- Padding lines before return statements
- Formatting conflicts disabled to avoid duplication with Biome

### Git Hooks

Pre-configured with Husky for automated quality checks:

- **Pre-commit**: Runs `lint-staged` on staged files only
- **Pre-push**: Full project linting and build validation
- **Commit-msg**: Validates commit message format

For detailed setup information, see:
- [Pre-commit Setup Documentation](./PRE_COMMIT_SETUP.md)
- [Commit Message Setup Documentation](./COMMIT_SETUP.md)

## 📝 Commit Message Format

This project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
<type>(<scope>): <description>

# Examples:
feat(auth): add login functionality
fix(button): resolve click handler issue
docs(readme): update installation guide
```

### Commit Types

- `feat` - New features
- `fix` - Bug fixes
- `docs` - Documentation changes
- `style` - Code formatting
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding tests
- `build` - Build system changes
- `ci` - CI/CD changes
- `chore` - Maintenance tasks

Use `bun run commit` for interactive commit prompts.

## 🎨 VS Code Integration

### Recommended Extensions

- [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) - Formatting and linting
- [TypeScript Importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter) - Auto import suggestions
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - Enhanced Git capabilities

### Settings

Add to your `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": "explicit"
  }
}
```

## 📁 Project Structure

```
├── public/              # Static assets
├── src/                 # Source code
│   ├── assets/         # Images, fonts, etc.
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── .husky/             # Git hooks
├── biome.jsonc         # Biome configuration
├── eslint.config.js    # ESLint configuration
├── commitlint.config.cjs # Commit message rules
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🔧 Configuration Files

- `biome.jsonc` - Biome formatter and linter settings
- `eslint.config.js` - ESLint rules (complementary to Biome)
- `commitlint.config.cjs` - Commit message validation rules
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript compiler options

## 🚀 Deployment

The build output will be in the `dist/` directory:

```bash
bun run build
```

Deploy the `dist/` folder to your preferred hosting platform:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Railway](https://railway.app)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `bun run commit`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Biome Documentation](https://biomejs.dev/)
- [Conventional Commits](https://www.conventionalcommits.org/)
