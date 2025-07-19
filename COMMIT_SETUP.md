# Commit Message Setup Documentation

## Overview

This project uses **Commitizen** and **Commitlint** to standardize commit messages and maintain a clean git history.

## ✨ Features

- **Interactive commit prompts** with Commitizen
- **Automatic commit message validation** with Commitlint
- **Conventional Commits** format enforcement
- **Pre-commit hooks** for code quality
- **Pre-push hooks** for build validation

## 🚀 How to Make Commits

### Option 1: Interactive Commitizen (Recommended)
```bash
# Stage your changes
git add .

# Use the interactive commit tool
bun run commit
```

This will prompt you through:
1. **Type of change** (feat, fix, docs, etc.)
2. **Scope** (optional - component/file affected)
3. **Short description** (required)
4. **Longer description** (optional)
5. **Breaking changes** (optional)
6. **Issues closed** (optional)

### Option 2: Manual Commit (Must follow format)
```bash
git commit -m "type(scope): description"
```

## 📋 Commit Types

| Type | Description | Example |
|------|-------------|---------|
| **feat** | New feature | `feat(auth): add login functionality` |
| **fix** | Bug fix | `fix(button): resolve click handler issue` |
| **docs** | Documentation | `docs(readme): update installation guide` |
| **style** | Code formatting | `style(app): fix indentation` |
| **refactor** | Code refactoring | `refactor(utils): simplify helper functions` |
| **perf** | Performance | `perf(api): optimize data fetching` |
| **test** | Tests | `test(auth): add unit tests for login` |
| **build** | Build system | `build(deps): update dependencies` |
| **ci** | CI/CD | `ci(github): add deployment workflow` |
| **chore** | Maintenance | `chore(lint): update eslint config` |
| **revert** | Revert commit | `revert: revert previous login changes` |

## 🎯 Commit Message Format

```
type(scope): short description

Optional longer description explaining the what and why.

BREAKING CHANGE: describe any breaking changes

Closes #123, #456
```

### Examples of Good Commits:
```bash
feat(auth): add OAuth2 authentication
fix(button): resolve hover state styling issue
docs(api): add authentication examples
style(components): format code with prettier
refactor(hooks): extract custom useAuth hook
perf(images): add lazy loading for gallery
test(utils): add unit tests for date helpers
build(webpack): optimize bundle splitting
ci(actions): add automated testing workflow
chore(deps): update react to v19
```

## 🔧 What Happens During Commit

1. **Pre-commit hook runs:**
   - Lint-staged processes only staged files
   - ESLint fixes issues (newlines before return)
   - Biome formats code (single quotes, etc.)
   - Auto-fixes are re-staged

2. **Commit message validation:**
   - Commitlint checks format
   - Rejects invalid messages
   - Must follow conventional commit format

3. **Pre-push hook runs:**
   - Full project linting (`bun run lint-ci`)
   - TypeScript build check (`bun run build`)

## 🛠️ Manual Commands

```bash
# Interactive commit
bun run commit

# Test commit message format
echo "feat: add new feature" | bunx commitlint

# Run commitlint on last commit
bunx commitlint --from HEAD~1 --to HEAD --verbose

# Check all lint-staged rules
bunx lint-staged

# Skip hooks (emergency only)
git commit --no-verify -m "emergency fix"
git push --no-verify
```

## 📁 Configuration Files

- **`commitlint.config.js`** - Commit message rules
- **`package.json`** - Commitizen configuration
- **`.husky/commit-msg`** - Commit message validation hook
- **`.husky/pre-commit`** - Code quality hook
- **`.husky/pre-push`** - Build validation hook

## 🎨 Benefits

- **Consistent history**: All commits follow the same format
- **Automatic changelogs**: Tools can generate release notes
- **Better collaboration**: Clear commit purposes
- **Quality assurance**: Code is automatically formatted and tested
- **Release automation**: Semantic versioning from commit types

## 🚨 Troubleshooting

### Commit rejected with "subject must not be sentence-case"
```bash
# ❌ Wrong
git commit -m "feat: Add new button component"

# ✅ Correct
git commit -m "feat: add new button component"
```

### Commit rejected with "type must be one of..."
```bash
# ❌ Wrong
git commit -m "added: new feature"

# ✅ Correct
git commit -m "feat: add new feature"
```

### Pre-commit hook fails
```bash
# Fix issues and try again
bun run lint-fix
git add .
git commit -m "fix: resolve linting issues"
```
