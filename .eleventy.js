module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets"); // Copy assets to output
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
  };
};
