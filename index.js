const http = require('http');
const { PORT = 8000 } = process.env;

const fs = require('fs');
const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname,'public');

function getHTML(htmlFileName) {
    const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
    return fs.readFileSync(htmlFilePath, 'utf-8')
}

function onRequest(req, res) {
    switch (req.url) {
        case "/":
            res.writeHead(200)
            res.end(getHTML("index.html"))
            return;
        case "/about":
            res.writeHead(200)
            res.end(getHTML("about.html"))
            return;
        default:
            res.writeHead(404)
            res.end(getHTML("404.html"))
            return;
    }

    // switch(req.url) {
    //     case "/":
    //       res.writeHead(200)
    //       res.end(getHTML("index.html"))
    //       return;
    //     case "/about":
    //       res.writeHead(200)
    //       res.end(getHTML("about.html"))
    //       return;
    //     default:
    //       res.writeHead(404)
    //       res.end(getHTML("404.html"))sad
    //       return;
    //   }

    

    const htmlFile = path.join(PUBLIC_DIRECTORY, 'index.html');
    const html = fs.readFileSync(htmlFile, 'utf-8')
    res.setHeader('Content-Type','text/html');
    res.writeHead(200);
    res.end(html);
}

const server = http.createServer(onRequest);

server.listen(PORT, 'localhost', () => {
    console.log("Server Sudah Berjalan, Silahkan Buka http://localhost:8000/", PORT);
});