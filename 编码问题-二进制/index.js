const fs = require("fs");
const path = require("path");
// let r = fs.readFileSync(path.resolve(__dirname, "name.txt"), 'utf-8'); // ���
let r = fs.readFileSync(path.resolve(__dirname, "name.txt")); // <Buffer d6 e9 b7 e5>  16进制，为什么没有用二进制来描述，因为太长了，一个汉字两个字节，两个汉字就是4个字节，16位
// 无论是gbk编码还是utf-8编码都是基于进制转换过来的
console.log(r);

console.log((255).toString(2));

let d = Buffer.from('朱'); // 结果是16进制 <Buffer e6 9c b1>
console.log(d); // e6 9c b1

// 将16进制转换成2进制
console.log((0xe6).toString(2)); // 11100110
console.log((0x9c).toString(2)); // 10011100
console.log((0xb1).toString(2)); // 10110001
// 111001 101001 110010 110001  => 切割成4份
// 00111001 00101001 00110010 00110001  => 补位

// 再将这个4*6的二进制数转成10进制
console.log(parseInt('00111001', 2)); // 57 就等于 console.log(parseInt('111001', 2)); 会自己补位
console.log(parseInt('00101001', 2)); // 41
console.log(parseInt('00110010', 2)); // 50
console.log(parseInt('00110001', 2)); // 49

// 这个时候 切割以后的二进制数最大就是 00111111 => 对应的十进制63，所以base64最大就是0-63 64个数，64个对应 base64就是这样来的

// 这就是64个十进制数对应的映射表
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str += str.toLocaleLowerCase()
str += '0123456789+/'

console.log(str[57] + str[41] + str[50] + str[49]); // 5pyx
