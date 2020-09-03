//--------------------------------------------------------------
let aPromise = new Promise((resole, reject) => {
    console.log('Hello');
    setTimeout(() => {
        //resole('Thanh cong');
        reject(new Error('Co loi xay ra'));
    }, 2000);
});

aPromise
    .then((msg) => console.log('Da thuc thi: ' + msg), (err) => console.log(err.toString()));
//--------------------------------------------------------------