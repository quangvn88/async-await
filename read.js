let fs = require('fs');

//--------------------------------------------------------------
fs.readFile('./a.txt', 'utf8', (err, data) => {
    if (err) return console.log('Loi: ' + err);
    //console.log('DU LIEU: ', data);
});
//console.log('Ket thuc');
//--------------------------------------------------------------
let data = fs.readFileSync('./a.txt', 'utf8');
console.log('Ket thuc');
console.log(data);
//--------------------------------------------------------------