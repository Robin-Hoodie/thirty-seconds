const prettier = require("prettier");

const prettierSupportedExtensions = prettier
  .getSupportInfo()
  .languages.map((language) => language.extensions)
  .flat();

// Remove "." from extension
const prettierGlob = `*.{${prettierSupportedExtensions
  .map((extension) => extension.slice(1))
  .join(",")}}`;

module.exports = {
  [prettierGlob]: "prettier --write",
};
