# TODAY

## `Array` , `camel case`

>이제껏 배운 변수(var,const,let)에 들어갈수있는 데이터(string(텍스트) , true/false(진실,거짓) , Number(숫자) , float(55.1)소수점)타입을  `Array` 로 정렬하는 법을 배웠음 그리고 `camel case`란 방식을 배움

```js

const monday = "mon"
const tue = "Tue"
const wed = "Wed"
const thu = "Thu"
const fri = "Fri"

console.log(monday, tue , wed , thu , fri)

const daysOfWeek = ["monday","tue","wed","thu","fri","sat","sun"]

console.log(daysOfWeek)

const daysOfWeek = ["monday","tue","wed","thu","fri","sat","sun"]

console.log(daysOfWeek[2])
```

>#1.9 Oraganizing Data With Array 강의에서는  Array라는 데이터 정렬 방식을 배운다. Array는 데이터를 저장하는 곳인데 리스트처럼 저장하는곳이다.
위에 예문에서 보듯이 요일을 정리 하고싶은데 일일이 다쓸수없기에 Array 라는 정렬방식으로 정렬을 한다. javascript에서의 Array 문법은 [] 이거다 저기안에 정렬하고 싶은거를 넣으면 된다. 예문에서는 요일을 정렬 했는데 const daysOfWeek = [요일] 을 넣어서 정렬 했다 그러면 console.log(daysOfWeek) 찍었을 때 요일이 쭉 정렬돼서 나온다 만약 요일3번째를 찍어내고 싶으면 예문처럼 console.log(daysOfWeek[2])이렇게 쓰면 3번째 요일을 찍어낼수있다 Array안에있는 규칙이다 컴퓨터는 사람이 아니기에 0부터 세기 시작해서 2를쓰면 3번째있는 요일을 보여준다. 그리고 javascript문법을 위한규칙 `camel case` 라는 문법규칙인데 뛰어쓰기가 필요할때 대문자를 쓰는 규칙이다 예를 들어 예문처럼 daysofweek를쓴다 하면 daysOfWeek 이렇게 뛰어쓰는 구간에서 대문자를 써준다 암묵적인 규칙인거같아 그냥 써도 오류는 생기지않는다.그렇지만 `camel case`문법 규칙을 써주자 좋은개발자가 되기위해서

## `Array`
- 데이터를 저장하는곳, 리스트같이 저장한다.
- javascript에서 문법은 [] 이다 
## `camel case`
- javascrip에서의 문법 규칙이다 안지켜도 오류는없지만 다른 개발자와 협업하거나 내가볼때도 지키는게 좋다. 예를 들어 daysOfWeek처럼 뛰어쓰기가 필요할때 뛰어쓰는게 아니라 대문자를 쓴다.
  
 # TOMORROW
 - `노마드 코더` 듣고 배출연습 