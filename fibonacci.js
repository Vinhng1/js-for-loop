// hien thi 20 so fibonacci
let a = 1;
let b = 0;
let temp;// temp ( bien tam thoi )
// fibonacci => cac phan tu sau se = tong 2 phan tu truoc do
// i chay tu 0 > 20
for (let i = 0; i < 20; i++) {
    temp = a ; 
    a = a + b;
    b = temp;
    document.write(a+"<br>")
}

