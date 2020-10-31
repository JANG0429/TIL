# TODAY 
 
 ## #2.4 Events and event handlers 
 > 자바스트립트는 CSS와HTML만 바꿀려고 만들어지지는 않았어  자바스크립트는 이벤트에 반응하기 위해 만들어 졌어 그럼 이벤트란 뭐냐? 뭘까? 이벤트는!  웹 사이트에서 발생하는 것들을 말하는거야! 예를들어서 `click` , `resize` , `submit` , `input change load` , `before closing printing` 같은것들 모두 이벤트야  좋은 사실은 우리가 이 이벤트를  중간에 가로 챌수있다는거야  예를 들면! window는 조금 다른 이벤트를 가지고 있어 예를 들면 아래 예문처럼 submit이라는 이벤트를 가져 근데 input은 존재 하지않아  아니다 submit은 window에 존재 하지않아 왜냐 ? window는  제출(submit) 할수없으니까 그럼 다시 resize 해보자  예문 처럼하면 우리가 이벤트를 받기 기다리는거래(listen to event) 자바스크립트는 이벤트를 받기위해 기다리는중이야  근데! 우리는 분명 뭘 어떤것인지 말해줘야해  우린 모든걸  다 기다리고 싶지 않기 때문이지  또 어떤건 우리가 신경 쓸 필요가 없거든 ㅇㅋ 그게 우리가 만드는 웹사이트를 느리게 만들어 event listener를window에 추가 하려고 하면 뭘해야할까.. 예문처럼  우리가 이벤트에서 다룰  함수를 적어주면돼 예문처럼 함수를 만들자 
 ```js
 const title = document.querySelector("#title")
 ```

 # 다시정리 2020.10.24.토요일
 
 ```js
 const title = document.querySelector("#title");

function handleResize(){
    console.log(" I have been resized");

}

window.addEventListener("resize",handleResize);
```
```js
 const title = document.querySelector("#title");

function handleResize(){
    console.log(" I have been resized");

}

window.addEventListener("resize",handleResize());
```

>이렇게 하면 창  이벤트 를 만들수있는거 같아 
2번째 예문은 그냥 바로 호출해버려 resize 를말이야 
```js
const title = document.querySelector("#title");

function handleResize(event){
    console.log(event);

}

window.addEventListener("resize",handleResize)
```
>이런식으로  쑬수도있어 나중에 추가해보자 이해 될때
```js
const title = document.querySelector("#title");

function handleclick(){
    title.style.color ="red"
}

title.addEventListener("click",handleclick)
```
> 클릭할때 색깔 바꿀수있는 코드