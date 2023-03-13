module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/feedforwardsystems/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    [
      ,
      {
        assets: [
          { path: "build.zip", label: "Builds" },
          { path: "coverage.zip", label: "Coverage" },
        ],
      },
    ],
  ],
};
