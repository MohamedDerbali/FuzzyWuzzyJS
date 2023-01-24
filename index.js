const fuzzyWuzzy = require('@fuzzywuzzyjs/core');
const http = require('http');

const app = fuzzyWuzzy();
app.createRoutes([
    { path: '/', method: 'GET', handler: (req, res) => {
        res.send('Hello World');
    }}
])

const server = http.createServer(app);
server.listen(3000, ()=>{
    console.log("Server is running on port 3000")
});