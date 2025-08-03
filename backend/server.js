const http = require("http")
const app = require("./app")
const dotenv = require("dotenv");

dotenv.config();

const server = http.createServer(app)

const port = process.env.PORT||3001;


server.listen(port,()=>{
    console.log(`Server running at ${port}`);
})