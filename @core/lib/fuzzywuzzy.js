const { createRoutes } = require("./routes.js");
const fuzzywuzzy = () => {
  console.log("fuzzy wuzzy app initialized");
  return {
    createRoutes,
    // useMiddleware: useMiddleware
  };
};

module.exports = fuzzywuzzy;
