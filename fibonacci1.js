let a = 1;
let b = 0;
let temp;
for (let i =0; i < 20;i++) {
    temp = a;
    a = a + b;
    b = temp;
    if (a % 5 === 0) {
        document.write(a);
        break;
    }
}