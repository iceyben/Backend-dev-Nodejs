
// Importing our modules
const fs = require('fs');
const http = require('http');
const PORT = 5000;


// Define our route
const homePage = fs.readFileSync('./navbar-app/index.html');
const homeStyle = fs.readFileSync('./navbar-app/styles.css');
const homeLogo = fs.readFileSync('./navbar-app/logo.svg');
const homeLogic = fs.readFileSync('./navbar-app/browser-app.js');

//create our server

const server = http.createServer((req, res)=>{
    const url = req.url;
  if(req.url === '/'){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write(homePage);
    res.end();
  }else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyle);
        res.end();
    } else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();
    } else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(homeLogo);
        res.end();
    }else if(req.url === '/index.html'){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write(homePage);
    res.end();
  }else if(url === '/about.html'){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>About Page</h1>');
    res.end();
  }else if(url === '/contact.html'){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<h1>Contact Page</h1>');
    res.end();
  }else if(url === '/products.html'){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<h1>Product Page</h1>');
    res.end();
  }else{
    res.writeHead(200, {'content-type' : 'text/html'} );
    res.write('<h1>404, Resource  Not Foun </h1>');
    res.end();
  }
})


server.listen(PORT, ()=>{
  console.log(`Server listening to port localhost:${PORT}`);
})
