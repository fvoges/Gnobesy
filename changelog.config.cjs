module.exports = {
  preset: "angular",
  writerOpts: {
    transform: (commit) => {
      if (commit.scope === "release") {
        return undefined
      }

      return commit
    },
  },
}
