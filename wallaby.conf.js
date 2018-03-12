module.exports = function(wallaby) {
  return {
    env: {
      type: "node"
    },
    files: [
      "tsconfig.json",
      "{src,dist}/**/*.{t,h}s{x,}",
      "!{src,dist}/**/*.spec.{t,h}s{x,}"
    ],
    testFramework: "jest",
    tests: ["{src,dist}/**/*.spec.{t,h}s{x,}"]
  };
};
