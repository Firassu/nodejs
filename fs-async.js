const {readFile,writeFile} = require('fs');

readFile('./extends/files/first.text','utf-8',(err,result)=>{
    if(err){
        console.log(err);
    }
    const res = result;
    readFile('./extends/files/seconde.text','utf-8',(err,resul)=>{
        if(err){
            console.log(err);
        }
        const sec = resul;
        writeFile('./extends/files/third.text',`Here is the result ${res},${sec}`,(err,result)=>{
            if(err) {console.log(err);}
            console.log(result);
        });
    })
})