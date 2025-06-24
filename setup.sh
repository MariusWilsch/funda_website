#!/bin/bash

# create-feature-app.sh
# A script to create a React 18 + Tailwind CSS v3 + shadcn/ui project with feature-based architecture

# Usage information
print_usage() {
  echo "Usage: ./create-feature-app.sh <project-name> [feature1] [feature2] [feature3]..."
  echo "Example: ./create-feature-app.sh my-app auth dashboard settings"
}

# Check for project name
if [ -z "$1" ]; then
  echo "Error: Project name is required"
  print_usage
  exit 1
fi

PROJECT_NAME=$1
shift
FEATURES=("$@")

# If no features provided, use default ones
if [ ${#FEATURES[@]} -eq 0 ]; then
  FEATURES=("home")
fi

# Create project directory
mkdir -p $PROJECT_NAME
cd $PROJECT_NAME

# 1. Create Vite project with React
echo "Creating Vite project with React 18..."
npm create vite@latest . -- --template react

# 2. Update package.json to ensure React 18
echo "Updating package.json to use React 18..."
sed -i '' 's/"react": "^.*"/"react": "^18.2.0"/g' package.json
sed -i '' 's/"react-dom": "^.*"/"react-dom": "^18.2.0"/g' package.json

# Remove TypeScript types if they exist
sed -i '' '/"@types\/react"/d' package.json
sed -i '' '/"@types\/react-dom"/d' package.json

# 3. Install dependencies
echo "Installing dependencies..."
npm install
npm install -D tailwindcss@3 postcss autoprefixer

# 4. Configure Tailwind CSS
echo "Configuring Tailwind CSS..."
npx tailwindcss init -p

# 5. Update tailwind.config.js
echo "Updating Tailwind configuration..."
cat > tailwind.config.js << 'EOL'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
EOL

# 6. Update index.css
echo "Updating index.css with Tailwind directives..."
cat > src/index.css << 'EOL'
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# 7. Create jsconfig.json for path aliases
echo "Creating jsconfig.json..."
cat > jsconfig.json << 'EOL'
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
EOL

# 8. Update vite.config.js for path aliases
echo "Updating vite.config.js..."
cat > vite.config.js << 'EOL'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
EOL

# 9. Create directory structure
echo "Creating directory structure..."
mkdir -p src/{features,shared,lib,core}
mkdir -p src/shared/{components,ui,data}
mkdir -p src/core/services

# Create feature directories
for feature in "${FEATURES[@]}"; do
  echo "Creating feature: $feature"
  mkdir -p src/features/$feature/{components,hooks}
  touch src/features/$feature/index.js
  touch src/features/$feature/components/index.js
  touch src/features/$feature/hooks/index.js
done

# Create barrel files
touch src/shared/components/index.js
touch src/shared/ui/index.js
touch src/shared/data/index.js
touch src/shared/index.js
touch src/core/services/index.js
touch src/core/index.js
touch src/core/router.js

# 10. Create utils.js
echo "Creating utility functions..."
mkdir -p src/lib
cat > src/lib/utils.js << 'EOL'
/**
 * Utility function to combine class names
 * @param {string[]} classes - Array of class names
 * @returns {string} - Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
EOL

# 11. Install and configure shadcn/ui
echo "Installing and configuring shadcn/ui..."
npm install -D @shadcn/ui

# Create a temporary file for shadcn/ui init answers
cat > shadcn-init-answers.txt << 'EOL'
New York
Neutral
EOL

# Run shadcn/ui init with predefined answers
npx shadcn@latest init < shadcn-init-answers.txt || echo "Manual intervention may be required for shadcn/ui init"
rm shadcn-init-answers.txt

# Add all shadcn/ui components
npx shadcn@latest add --all || echo "Manual intervention may be required for adding shadcn/ui components"

# 12. Update App.jsx with a sample component
echo "Creating sample App component..."
cat > src/App.jsx << 'EOL'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Feature-Based Architecture</CardTitle>
          <CardDescription>
            Scaffolding with shadcn/ui components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This is a simple example using shadcn/ui components to verify that
            everything is working correctly.
          </p>
          <div className="flex items-center justify-center">
            <Button
              onClick={() => setCount((count) => count + 1)}
              className="mr-2"
            >
              Count: {count}
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
EOL

# 13. Update App.css
echo "Updating App.css..."
cat > src/App.css << 'EOL'
/* App styles using Tailwind CSS classes */
EOL

echo "Project setup complete! 🎉"
echo "To start the development server, run:"
echo "cd $PROJECT_NAME && npm run dev"
