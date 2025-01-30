console.log("hello world");


//Variables

var a = 10; //function scope
b = 20; // global scope
c = 40;
// console.log(a+b);

// foo(); //hoisting -- u can call function before it is defined.

// function foo(){
//     c = 30; // even if we defined c inside of the block, we can reach c from out of the scope.
//     console.log(a+b+c);
// }
// console.log(a+b+c);

// foo_2();
// function foo_2(){
//     let c = 30; // 'let' keyword allow us that 'c' is a special for that scope. We can not reach 'c' from out of the scope.
//     console.log(a+b+c);
// }


//console.log(a+b+c);


// var str = "2";
// console.log(typeof(str));
// var num = 10;
// console.log(str);

// console.log(num + str); // '+' means gather both like a string, so result will 108
// console.log(num - str); // Js thought that mathematichal operation so result will 8

// var k;
// console.log(k);


var User = {
    name: "egemen";
    surname: "aksoz";
}