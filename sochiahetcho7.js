let sum = 0;
let count = 0; // bien dem so luong
for (let i = 1; count < 30; i++) {
    if (i % 7 === 0 ) {
        sum += i;
        count++;
    }
}
document.write(sum); 