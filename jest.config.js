module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "components/(.*)": "<rootDir>/src/components/$1",
    "\\.css$": "identity-obj-proxy",
  },
};
