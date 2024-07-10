let a = 1;
// document.write(console.log(a));
let b = "BB";
// document.write(console.log(b));
// document.write(Boolean(a && b));
// document.write(Boolean(a && b && ""));
let c; // c = a/ c = b, if (a){c = a} else if (b) {c = b} else {c = undefined}
// document.write(Boolean(c));
// document.write(c);
// 定义一个函数来设置 c 的值
function setC() {
  if (a) {
    c = a;
  } else {
    c = b;
  }
}
// 调用函数设置 c 的值
setC();
// 输出 c 的值
console.log(c);
