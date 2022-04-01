/**
 * Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
 */

/**
 * Viết một javascript logic chọn bất kì một số từ 1 đến 10, đồng thời hiển thị một prompt yêu cầu user nhập một số mà họ đoán được.
 * Sau đó, so sánh và hiển thị thông báo cho người dùng kết quả đúng hay sai
 */

// Get a random integer from 1 to 10 inclusive
// Lấy một số bất kì từ 1 đến 10
const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num)
    console.log('Matched');
else
    console.log('Not matched, the number was ' + gnum);
