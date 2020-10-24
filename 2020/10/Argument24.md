# javascript에서의 함수의 사용과 argument(인자) 의 설명

> 함수와 인자는 땔수없는 관계인거같아 일단 함수를 쓸려면 인자의 설명은 없으면 안돼는거 같아.
>자 예문 1을 봐보자!
> 예문1을 봐보면 인자에 대한 설명이 들어가긴하는데 이해하는데는 뭔가 부족해 좀만더 봐보자 어떻게 함수를 커스터 마이징할수있을까 
> 우리함수는 인자를 받는데
> 우리가 기억해야할건 인자(argument)는 변수 같은거야 우리가 주는 값을 저장할거야 
> 우린 함수 sayHello를 준비시켜야해 ㅇㅋ?
> 우리가 주는 인자(argument)를 가지고 갈수있게 해줘야해!
> 함수를 준비하는방법은! 함수를 만드는 시점에 써주는거야 뭔가를  예문을 봐보자! 
> 함수를 만드는 시점에! 인자(argument)를 넣는거야
> 뭐든 괜찮아 우리가 원하는 이름으 쓰면돼 내가 기억하고 잘쓰는한!
> 변수명이라 부를수도있고 parameter 혹은 arugment\
> 만약 예문처럼 name이라고 썼으면 저건 함수안에서 사용할 이름이 되는거야 뭐든 상관없어 연관성을 지어도 되고 아니면 뭔가 내가 쓰고 싶은 이름을 써도 괜찮아 
> 프로그래머니까 알아야하는거고 사용자는 알필요없는거야
> js는 예문에 "sungho"를 사용하게 될거야 여기에 뭐를 찾게 되면 말이지 
> js가 하게되는거는 "sungho"값을 name라는 것에 넣고
> name은예문 처럼 들어가게되고  저렇게 하는게 Hello! sungho를 찍는 방법이야  
> 이방법이 외부에 있는 데이터를 읽는 함수를 만드는 방법이야  함수에게 외부에 있는 데이터를 주는 방법이지
> 예문2번째 처럼 활용할수도있어
```js
function sayHello(name,여기 함수를 만드는 시점!!){
    console.log('Hello!',name); name은 여기에 들어가게 되는거야!!!
}
sayHello("sungho"); 여기 sayHello 괄호안에 들어가는게 인자(argument)야 
console.log();  console 라는 object에있는 log는함수야 
```
```js
function sayHello(name,age){
    console.log('Hello!',name,"you have",age);
}
sayHello("sungho",25);
```