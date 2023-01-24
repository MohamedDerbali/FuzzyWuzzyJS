const fuzzywuzzy = require("../core")
// const userRoutes = require("./router/users");
const http = require("http");

const app = fuzzywuzzy();

app.createRoutes([
    { prefix: "/users", methods: [] },
    { prefix: "/apii", methods: [] }
]);

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});