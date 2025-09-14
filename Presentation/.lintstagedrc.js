module.exports = {
  "*.{ts,tsx}": "eslint --fix",
  "*.{js,ts,tsx,json,css,scss,md}": "prettier --write",
  "*.{css,scss}": "stylelint --fix"
};