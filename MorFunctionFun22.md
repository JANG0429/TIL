# TODAY

## `return`
`function` 과   `return`의 사용과 설명 

```js
//1.
function sayHello(name,age){
console.log('Hello!',name, "my age is",age);
}
sayHello("sungho",25);
//2.
function sayHello(name,age){
    console.log(`Hello! ${name} my age is ${age} nice to meet you`);
}
sayHello("sungho",25);
//3.
function sayHello(name,age){
    console.log (`Hello! ${name} my age is ${age} nice to meet you`)
}

const greetSungho = sayHello("sungho",25)
console.log(greetSungho);
//4.
function sayHello(name,age){
   return `Hello! ${name} my age is ${age} nice to meet you`
}
const greetSungho = sayHello("sungho",25);
console.log(greetSungho);
//5.
const calculator = {
 plus: function(a , b) {
     return a + b;
 }
}

const plus = calculator.plus(5 , 5);
console.log(plus);
//6.
const calculator = {
    plus: function(a , b) {
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiply: function(a , b){
        return a * b 
    },
    divide: function( a , b){
        return a / b
    },
    square: function(a , b){
        return a ** b
    }
    
   }
   
   const plus = calculator.plus(5, 5);
   const minus = calculator.minus(6, 6);
   const multiply = calculator.multiply(7, 7);
   const divide = calculator.divide(5, 5);
   const square = calculator.square(5, 5);
   
   console.log(`plus: ${plus}, minus: ${minus}, multiply: ${multiply}, divide ${divide}, square: ${square}`);   
   //7.
   const calculator = {
    plus: function(a, b) {
    return a + b;
    },
    minus: function(a, b) {
    return a - b;
    },
    multiply: function(a, b) {
    return a * b;
    },
    divide: function(a, b) {
    return a / b;
    },
    square: function(a, b) {
    return a ** b;
    }
    };
    
    const a = 5;
    const b = 5;
    
    const plus = calculator.plus(a, b);
    const minus = calculator.minus(a, b);
    const multiply = calculator.multiply(a, b);
    const divide = calculator.divide(a, b);
    const square = calculator.square(a, b);
    
    console.log(`plus: ${plus}, minus: ${minus}, multiply: ${multiply}, divide ${divide}, square: ${square}`);

```

>#2.1 More Function Fun 강의에서는 console.log를 쓰는대신에 딱봐도 문자열 같은거 말고 섹시한 string쓰는 법을 알려줌 예문1 처럼 많은 콤마를 쓰고 싶지않으면 예문2처럼 ``이걸 사용해서 사용할수있음
우리가 하는것 사이에 어쥬 큰차이가 있는게있음 console.log하고 returning x 하고는 컴퓨터 사이언스의 가장 기본임 console.log로 뭘하는대신에 return이란 내가 돈을 내면 반드시 잔돈을 받아야 하지 그런개념이야
예문3처럼 하면 undefined 가 나와 5번째줄에 greetSungho라는 변수를 선언 했어 const greetSungho =
greetSungho는 sayHello 함수의 리턴값이랑 같은거야
다시 greetSungho는 sayHelle 함수의 리턴값이야 const greetSungho 여기 에 뭐가 발생 할지 생각해봐 발생하는지 보자! greetsungho는 sayHello를 실행시키고 물론 sayHello는console.log로 뭘 찍지 그리고 나서 console.log로 greetsungho를 해보면 console.log(greetSungho)는 정의 되지 않았다고 나와(undefined)
문장을 반곡해서 짚어보자면 리꼬가 전에 말했던거 말이야
greetSungho는sayHello의 실행된 결과 값이다 근데 우린 예문3에서 아무것도 반환하지 않았어 아무것도 쓰질않았다고 이제 우리가 해야할건 만약 greetSungho가정의 안된상태 가 되질 않길 원한다면 뭔가를 반환 하도록 해보겠어 리꼬가 이걸 반환하게 되면 greetSungho는 정의 안된 상태 가되지 않겠지 우린 단지 하나의 console.log를 갖게되겠지 왜냐면 이 sayHello함수는 어떤값을 반환하지만 console.log로 찍어주진않으니 이제 console.log를 보자구
console.log 는객체야(greetSungho)
우리만의 객체를 만들어 보겠다고 해보자 math객체를 만들어 보자.
calculator.plus()
console.log()같이 
calculator.plus()라는걸 갖고싶어
calculator.plus(5,5);그래서 우린 10을 갖겠지 이의미는 함수기능을 객체 안에 구현 해야하는 거지
 그래서 리꼬가 뭘할거냐면 plus:이건 함수지  함수를 넣어야해 plus:function 예문5 처럼 plus 함수는 2개의 인자 값을 받아 그래서 예문5처럼 2개의 인자를 plus:function(a, b)여기에 넣어 calculator.plus(5, 5)에 인자 값을 plus:function(a,b)에넣는거지  a, b는저번강의 때 name, age같은거야  뭘넣어도 상관없어 내가 기억하고 잘쓰는한 그리고 나선 에문5 처럼 우린 반환해 console.log(greetSungho)하고 calculator.plus(5,5) console,calculator 두개다 모두 객체고 log()인자를 가지는 함수고 plus()도 2개의 인자를 가지는 함수야 

 ## `return`
  - 돈을 내면  반드시 잔돈을 받는 개념이랑 비슷하다
  - 값을 반환 하는데 사용한다
  
  # TOMORROW
  `노마드 코더` 듣고 배출연습 