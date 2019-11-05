const express  =  require('express');
const server = express();

server.get('*', (req, res)=>{
    res.sendFile(__dirname+'/views/index.html');
});

server.listen(4000, () => console.log('Exemple app listening on port 3000!'));