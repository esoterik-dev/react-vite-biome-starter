# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and code quality tools.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Linting and Formatting with Biome

This template uses [Biome](https://biomejs.dev/) for fast, all-in-one linting and formatting for TypeScript, JavaScript, and more.

### Getting Started

1. **Install Biome** (if not already):

   ```sh
   npm install --save-dev @biomejs/biome
   ```

2. **Initialize Biome** (if not already):

   ```sh
   npx biome init
   ```

   This will create a `biome.json` or `biome.jsonc` configuration file in your project root.

3. **Format and Lint Your Code**

   - To format your code:

     ```sh
     npx biome format .
     ```

   - To lint your code:

     ```sh
     npx biome lint .
     ```

4. **Recommended: VS Code Extension**

   For best results, install the [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) to enable on-save formatting and inline linting.

### Example Biome Configuration

Here’s a minimal example of a `biome.json`:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.0.0/schema.json",
  "formatter": {
    "enabled": true
  },
  "linter": {
    "enabled": true
  }
}
```

See the [Biome documentation](https://biomejs.dev/docs/) for more configuration options.
