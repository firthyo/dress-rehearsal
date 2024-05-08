const path = require("path");

module.exports = {
  // Other webpack configuration...
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      utils: path.resolve(__dirname, "src/utils"),
      // Add more aliases as needed
    },
  },
};
