/**
 * Created by chengshuailiu on 16/11/23.
 */
/****************
 一、函数默认值
 *****************/
function log(x, y) {
    var y = y || 'World';
    console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World


function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello

/*
 * ES6的写法还有两个好处：
 * 首先，阅读代码的人，可以立刻意识到哪些参数是可以省略的，不用查看函数体或文档；
 * 其次，有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行。
 * */


/****************
 二、模板字符串
 *****************/


var basket = {
    count: 1,
    onSale: 20,
}

$('#result').append(
    'There are <b>' + basket.count + '</b> ' +
    'items in your basket, ' +
    '<em>' + basket.onSale +
    '</em> are on sale!'
);

$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);

/*
 * 模板字符串（template string）是增强版的字符串，
 * 用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
 * */


/****************
 三、解析赋值
 ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
 *****************/

var a = 1;
var b = 2;
var c = 3;

var [a, b, c] = [1, 2, 3];


var {foo, bar} = {foo: "aaa", bar: "bbb"};
foo // "aaa"
bar // "bbb"


var {bar, foo} = {foo: "aaa", bar: "bbb"};
foo // "aaa"
bar // "bbb"

var {bar} = {foo: "aaa", bar: "bbb"};
baz // undefined

let baz;
({bar: baz} = {bar: 1}); // 成功

baz // 1
/*
 * 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
 * */


/****************
 四、Promise

 *****************/
function timeout(ms) {

    return new Promise(function (resolve, reject) {
        if (typeof(ms) === "number") {
            setTimeout(resolve, ms, 'done');
        }
        else {
        }
    });
}

timeout(100).then((value) => {
    console.log(value);
});


/****************
 五、let const



 *****************/


{
    let a = 10;
    var b = 1;
}

a // ReferenceError: a is not defined.
b // 1

var a = [];


for (var i = 0; i <= 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}

a[0]();


a[6](); // 10


var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6


const PI = 3.1415;
PI // 3.1415

/*
 PI = 3;
 // TypeError: Assignment to constant variable.
 const foo;
 // SyntaxError: Missing initializer in const declaration
 */

/****************
 六、Class
 ES6的类，完全可以看作构造函数的另一种写法
 *****************/
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString1 = function () {
    return `(${this.x}____${this.y})`
};

var p = new Point(1, 2);
p.toString1();


//定义类
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class A extends Object {
}

A.__proto__ === Object // true
A.prototype.__proto__ === Object.prototype // true


/****************
 七、Module
 模块化编程 重要依据
 *****************/

export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

var year = 1999;

// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};


export function multiply(x, y) {
    return x * y;
};

import {firstName, lastName, year} from './profile';

function setName(element) {
    element.textContent = firstName + ' ' + lastName;
}


import {lastName as surname} from './profile';

/****************
 九、箭头函数
 *****************/

var f = () => 5;


// 等同于
var f = function () {
    return 5
};
var sum = (num1, num2) => {
    return this
}
// 等同于
var sum = function (num1, num2) {
    return num1 + num2;
};
/*
 * 箭头函数有几个使用注意点。

 （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

 （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

 （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

 （4）不可以使用yield命令，因此箭头函数不能用作Generator函数。
 * */


/****************
 九、Rest
 ES6引入rest参数（形式为“...变量名”），
 用于获取函数的多余参数，这样就不需要使用arguments对象了。
 rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
 *****************/

function add(...values) {
    let sum = 0;

    for (var val of values) {
        sum += val;
    }

    return sum;
}

add(2, 5, 3) // 10