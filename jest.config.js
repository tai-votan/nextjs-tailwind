const nextJest = require("next/jest");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.stories.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/.next/**",
    "!<rootDir>/*.config.{js,ts}",
    "!<rootDir>/constants/**",
    "!<rootDir>/.storybook/**",
    "!<rootDir>/config/**",
    "!<rootDir>/coverage/**",
    "!<rootDir>/redux/**",
    "!<rootDir>/components/common/index.ts",
    "!<rootDir>/pages/_app.tsx",
    "!<rootDir>/pages/_document.tsx",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),

  // moduleNameMapper: {
  //   // Handle CSS imports (with CSS modules)
  //   // https://jestjs.io/docs/webpack#mocking-css-modules
  //   "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  //
  //   // Handle image imports
  //   // https://jestjs.io/docs/webpack#handling-static-assets
  //   "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$": `<rootDir>/__mocks__/fileMock.js`,
  //
  //   // Handle module aliases
  //   "^@/components/(.*)$": "<rootDir>/components/$1",
  //   "^@/constants/(.*)$": "<rootDir>/constants/$1",
  //   "^@/pages/(.*)$": "<rootDir>/pages/$1",
  // },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
  testEnvironment: "jest-environment-jsdom",
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
