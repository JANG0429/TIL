# TODAY 
> 오늘의 강의에서는DOM에서 title 에서의 가능성을 볼수있는 강의내용임 
```JS
const title = document.getElementById("title")
title.innerHTML = "Hi JS" 이런식으로 HTML에서 바꾸지않아도 js에서도 html에서 바꾸는거 처럼 바꿀수있다 그리고  console.log(title) 하면 html 검사 화면에서 console창에서  <h1 id="title">Hi JS </h1> 이렇게  볼수있음  그리고 실제로도 화면은 hi js로 바뀌어있는걸 볼수있음 
```
```js
const title = document.getElementByIn("title")
title.innerHTML = "hi js" 
title.style.color = "black" 이렇게 하면 글자 색깔도  
document.title = "hi my website" 이렇게 하면 위에 웹사이트 이름 바꿀수있음  
console.log(document)로 찍어보면 여러가지 키들이 나오고 내가 바꿀수있는것들이 보여짐 
```
```js
const title = document.querySelector("#title") 이렇게 css에서 했던거와같이 document에서 찾게 될거야 id를 만약 class면 .이걸로 찾으면돼  const title = document.querySelector(".title") 이런식으로 ㅇㅋ?
우리는 인제 querySelector 을많이 쓸거야 우리가 만들어볼 모든 연습들에 많이 쓴다니까 익숙해지자

