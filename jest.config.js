// jest.config.js or jest.config.ts
export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "babel-jest", // For TypeScript/JSX files
    "^.+\\.jsx?$": "babel-jest", // For JavaScript/JSX files
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy", // Mock CSS imports
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Setup test files
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "src/store/"], // Ignore build files
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coveragePathIgnorePatterns: ["<rootDir>/src/store/"], // Ignore the store folder for coverage
  // Other Jest configuration options...
};
