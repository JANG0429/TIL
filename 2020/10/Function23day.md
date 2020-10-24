# Javascript 에서 function(함수) 를만드는 방법
>  JS에서 함수를 만들수있는 방법을 정리 해보는 마크다운
> 먼저 우리가 해야할건 function을 주는거야
>  그리고 ! 함수 이름을 주는거야 그건 내가 정해 무슨 이름을 주는건 내가 정해야해.
> 예를 들어 아래예문이 함수를 정의 하는 문법이야
> 함수는 한조각의 코드야 많이 많이 가져다 쓸수있는 
>   예문2를 하면 결과창에서는 Hello!라고 뜰거야 축하해 나의 첫함수야 
```js
function sayHello()
```
```js
function sayHello(name){
    console.log('Hello!',name)
}

sayHello("sungho");
console.log() 여기서 log도함수인데console object안에있는 함수라는 뜻이야 ㅇㅋ? console.log()는안에 메세지가 없으면 동작하지 않아 