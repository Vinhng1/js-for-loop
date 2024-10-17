// i chay tu 1 den 100
for (let i = 1; i < 100 ; i++) {
    // 2 so chia het cho 3 va 5
    if (i % 3 === 0 && i % 5 === 0) {
        document.write("FizzBuzz" + "<br>");
        // so chia het cho 5
    } else if ( i % 5 === 0) {
        document.write("Buzz" + "<br>");
        // so chia het cho 3
    } else if ( i % 3 === 0) {
        document.write("Fizz" + "<br>");
        // cac so ko chia het cho 5 va 3
    } else {
        document.write( i + "<br>")
    }
}