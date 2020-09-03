let fs = require('fs');

let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('Tham so phai la kieu number'));
            }
            resolve(a + b);
        }, 2000);
    });
};

add('4', 5)
    .then(res => console.log(res), err => console.log(err + ''));
//--------------------------------------------------------------    
fs.readFile('./a.txt', 'utf8', (err, data) => {
    if (err) {
        return console.log('Loi' + err);
    }
    console.log(data);
});

let promiesRead = new Promise((resolve, reject) => {
    fs.readFile('./a.txt', 'utf8', (err, data) => {
        if (err) return reject(err);
        resolve(data);
    });
});

promiesRead.then(data => console.log(data), err => console.log(err + ''));
//--------------------------------------------------------------
let read = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
};
read('./a.txt').then(data => console.log(data), err => console.log(err + ''));
//--------------------------------------------------------------