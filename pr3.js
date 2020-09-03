//--------------------------------------------------------------    
//Promise liên tiếp
//--------------------------------------------------------------    
let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('Tham so phai la kieu number'));
            }
            resolve(a + b);
        }, 1000);
    });
};

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('Tham so phai la kieu number'));
            }
            resolve(a * b);
        }, 1000);
    });
};

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('Tham so phai la kieu number'));
            }

            if (b === 0) return reject(new Error('Loi chia cho 0'));

            resolve(a / b);
        }, 1000);
    });
};

//--------------------------------------------------------------    
//(4 + 5) + 6
add(4, 5)
    .then(res => add(res, 6), err => console.log(err + ''))
    .then(result => console.log(result), err => console.log(err + ''));

add('4', 5)
    .then(res => add(res, 6))
    .then(result => console.log('Ket qua la: ' + result))
    .catch(err => console.log(err + ''));
//--------------------------------------------------------------
let tinhDienTich = (a, b, h) => {
    add(a, b)
        .then(res => multiply(res, h))
        .then(result => divide(result, 2))
        .then(squre => console.log('Dien tich hinh thang = ' + squre))
        .catch(err => console.log('Loi' + err));
};
tinhDienTich(6, 4, 5)
//--------------------------------------------------------------
let tinhDienTich1 = (a, b, h) => {
    return add(a, b)
        .then(res => multiply(res, h))
        .then(result => divide(result, 2));
};
tinhDienTich1(6, 4, 5)
    .then(squre => console.log('Dien tich hinh thang = ' + squre))
    .catch(err => console.log('Loi' + err));