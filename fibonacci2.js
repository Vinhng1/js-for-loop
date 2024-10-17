let a = 1;
let b = 0;
let temp;
let sum = 0;
for (let i = 0; i < 20; i++) {
    temp = a ;
    a = a + b;
    b = temp;
    sum += a;
}
document.write(sum)
