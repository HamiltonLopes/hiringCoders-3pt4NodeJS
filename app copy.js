import {createServer} from 'http';
import {parse} from 'url';

const server = createServer((req, res) =>{
    const params = parse(req.url,true).query;

    let resposta = "";
    switch(params.question){
        case 'melhor-filme': 
            resposta = "Star Wars!"
        break;

        case 'melhor-time-do-mundo':
            resposta = "FC Barcelona!"
        break;

        case 'melhor-tech-backend':
            resposta = "NodeJS"
        break;

        default:
            resposta = "Nao sei, srry!"
        break;
    }
    res.statusCode = 200;
    res.setHeader ('Content-Type', 'text/plain');
    res.end(resposta);
});

server.listen(3000, '127.0.0.1', ()=>{
    console.log('server on at http://127.0.0.1:3000');
});