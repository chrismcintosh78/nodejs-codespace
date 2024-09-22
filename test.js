const http = require('http');

const server = http.createServer((req, res) => {
      const { method, url } = req;
      if (url === "/") {
            res.end("hello")
      }
        // Write routing logic here later

          res.end('Not Found');
});

server.listen(3000, () => {
      console.log('Server is running on port 3000');
}); 