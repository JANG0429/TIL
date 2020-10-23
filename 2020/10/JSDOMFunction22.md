# TODAY

## `DOM(Document Object Module)`

>우리가 함수를 가졌던 것과 같이 예를 들면 console.log();,calculator.plus(); 같은거 말이야 브라우저에서 우리에게 제공하는 더 많은 다른 함수들이있어  머물수도 calculator로 뭘만들 면서 말이야 근데 리꼬쌤이 하는 방향은  사실 HTML을 다루는 거야 HTML이 JS 하고 함께 쓰려고 하면 어떻게 동작하는지 보여 줄거야 우리가 이미 가지고 있는 함수들을 보여주고 싶데 리꼬쌤이 자바스크립트 프로그래머를 위해 이미 존재하는게 있어
CSS와 같이 JS에서도 element를 선택 할수있어 그래서 변경 할수있지 html결과창에서 html을 건들지 않고 js만으로 title을 바꾸고 싶어 그럼 어떻게 해야할까?
 그럼 html창으로가서 h1 id="title" this work! /h1 가서 아이디를 줄거야 css에서는 id를선택할때 # 선택해서 써 js에서는 어떻게 id를 선택할까? js창으로 와서 그냥 console처럼 쓰는거야 근데 console대신 document 라고 하는걸 쓸거야 document는 js창에서 보면 많은 것들이있어 document역시 object야
 console.log(document) 크롬 검사창 console창에 찍어 보면 document를 대표하는 html을주는걸 볼수있어 html document는 자바스크립트가 되지 console.log나calculator.plus같이 document.는 어떤 많은 것들을 가지고있어 여기서 우리는 document.getElmentById()  더이쁘게 만들면 const title = document.getElementById("titl"); 이렇게 만들수있어
 js예문에서 console.log(title); 타이틀은 압축된놈이야 뭔가를 바꾸고 싶다고 해보자 뭔가 매우 중요한 걸 깨달 았을 때지 압축된 저 타이틀을 DOM이라 부른데 DOM(Document Object Module) js는 나의 html에있는 모든 요소를 가지고 올꺼야 그리고 그걸 객체로 바꿀거야 자!!! 생각 해보자! sungho에서 생성했던 객체들 말이야 js는 나의 html태그를 가져다가 객체로 만들거야 이객체는 console.찍었을때 나오는것 같이 나오지 엄청 많은 객체들이있어 여기 있는 모든건 다 너의 document있는 모든건 다 객체가 될거야 모든것 모든html은 객체가 되는거야 객체는 많은 키들을 가지고 있다는 걸알아야해 .log . error .name .handsome .age 뭐든~

#### html
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Something</title>
        <link rel="stylesheet"
        href="text.css" />
    </head>
    <body>
        <h1 id="title">This works!</h1>
        <script src="text.js"></script>
    </body>
</html>
```
####  css  
```css
body{
    background-color: tomato;
}
h1{
    color: white;
}
```
#### js
```js
//1.
const title = document.getElmentById("title")
console.log(title)
console.error("fuck");
//2.
const title = document.getElementById("title")
title.innerHTML = "hi Js"
