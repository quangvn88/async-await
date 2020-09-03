let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('Tham so phai la kieu number PHEP CONG'));
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
let addAsync = async () => {
    let res = await add(4, 5);
    console.log(res);
};
addAsync();
//--------------------------------------------------------------
let tinhDienTich = async (a, b, h) => {
    try {
        let ab = await add(a, b);
        let abh = await multiply(ab, h);
        let square = await divide(abh, 2);
        console.log(square);
    } catch (error) {
        console.log(error + '');
    }
};
tinhDienTich(4, 5, 6);
//--------------------------------------------------------------
let tinhDienTichCB = async (a, b, h, cb) => {
    try {
        let ab = await add(a, b);
        let abh = await multiply(ab, h);
        let square = await divide(abh, 2);
        cb(undefinee, square);
    } catch (error) {
        cb(error);
    }
};
tinhDienTichCB(4, 5, 6, (err, result) => {
    if (err) {
        return console.log(err);
    }
    console.log(result);
});
//--------------------------------------------------------------
let tinhDienTichPR = async (a, b, h,) => {
    try {
        let ab = await add(a, b);
        let abh = await multiply(ab, h);
        let square = await divide(abh, 2);
        return Promise.resolve(square);
    } catch (error) {
        return Promise.reject(error);
    }
};
tinhDienTichPR(4, 5, 6)
    .then(res => console.log(res))
    .catch(err => console.log(err + ''));