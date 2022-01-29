const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('Its the home page !');
    }
    else if(req.url ==='/about'){
        res.write('Hi we are the best company ever ');
        res.end();
    }
    else{
        res.end(`<h1>Opps</h1>
        <a href='/'>we couldn't express what you are looking for !</a>`)
    }
})
server.listen(5000)