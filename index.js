const fuzzyWuzzy = require('fuzzywuzzy-core');
const http = require('http');

const app = fuzzyWuzzy();

const server = http.createServer(app);
server.listen(3000, ()=>{
    console.log("Server is running on port 3000")
});