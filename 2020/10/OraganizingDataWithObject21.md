# TODAY

## `Object`
 
>Array 와 Object 의차이점으로 Object에는 각 value에 이름을 줄수 있는거지 만약 네가 리스트를 만들고 싶을땐Array를 정의 하겠지 간단하잖아 그냥 리스트를 만들면 되니까 저번에 Array 강의 에서 했던 거처럼 요일 리스트를 만들려면 그냥 const daysOfWeek = [월,화,수,목,금,토]; console.log(daysOfWeek); 실행하면 리스트가 나오니까 근데 만약 내가 내 개인정보를 저장하고 싶다면 내개인 정보를 저장 하려면?

```js

1.  const sunghoInfo = ["sungho" , 25 , "suwon", "male"];
console.log(sunghoInfo);

2.  const sunghoInfo = {
    name: "sungho"  ,
    age: 25 ,
    gender: "male",
    isHandosme: true
};
console.log(sunghoInfo);

3.  const sunghoInfo = {
    name: "sungho"  ,
    age: 25 ,
    gender: "male",
    isHandosme: true
};

console.log(sunghoInfo.gender);

sunghoInfo.gender = "female"

console.log(sunghoInfo.gender);

4.  const sunghoInfo = {
    name: "sungho"  ,
    age: 25 ,
    gender: "male",
    isHandosme: true
};

sunghoInfo = true

console.log(sunghoInfo);

5.  const sunghoInfo = {
    name: "sungho"  ,
    age: 25 ,
    gender: "male",
    isHandosme: true ,
    favMovies:["For GOD", " old boy","fly boy"],
    favFood:[{
        name:"coffe",
        ice: true,},
        {
            name:"sweet potato",
            ice: false
        }]
    };
    
console.log(sunghoInfo);

6.  const sunghoInfo = {
    name: "sungho"  ,
    age: 25 ,
    gender: "male",
    isHandosme: true ,
    favMovies:["For GOD", " old boy","fly boy"],
    favFood:[{
        name:"coffe",
        ice: true,},
        {
            name:"sweet potato",
            ice: false
        }]
    };
    
console.log(sunghoInfo.favFood[1].name);
```

> #1.10 Organizing Data With Object 강의에서는`Array`와 `Object`의차이점과 `object`를 javascript에서 어떻게 사용하는지를 배운다 javascript에서의 object의 문법은 {} 이거다.Array는 데이터를 리스트같이 저장해서 보여줬다면 object는 각value(가치?)에 이름을 줄수있다 만약 내가 리스트를 만들고 싶을땐 예문1처럼 만들면 되지만 효율적이지않고 뭐가 뭔지 잘 모르게 된다 그래서 object를 쓰면 각 데이터에 이름을 줄수있다. labal을 붙여주는거다. 다시말하지만 {}이게 javascript에서 object를 생성하는 방법이다.object는Array 처럼 작동하지않아 object는 실제 객체를 만드는거야 무슨말이냐면 중요해! labal을 내가 저장하고 싶은 data에 줄수있는거야 어떤값들을 리스트로 나열하는 방법 대신 예문2 처럼만들수있어object를 사용해서 말이지~ 예문2의 name은 "" 이걸 붙여주지않았어 왜냐 변수니까 ""이걸 붙이면 안돼! 아래에있는 age도 마찬가지 이제 어떻게 gender에만 접근할수있어? 물어볼수있어 그럼 어떻게 접근할수있을까? console.log(sunghoInfo.gender);이렇게 gender 값만 받아서 실행해 데이터의 이름만 사용 하는거야 내가붙인 이름들이지. 또한 내가 원하면 예문3 처럼 male을female로 바꿀수있어  이게 자바스트립트에서 재미있는 점이래 리꼬쌤이 그러니까 sunghoInfo안에있는 값을(gender)바꿀수있어 그렇지만 sunghoInfo자체는 바꿀수없어! 왜냐면 const로 먼저 선언을 해주었기 때문에 sunghoInfo 자체는 바꿀수없어  const는 바꿀수없는 상수니까 예문4처럼 바꿀려고 하면 오류가 날거야 데이터를 정렬하는데는 두가지 방법이있는데 하나는 Array이고 다른하나는object야 만약 DB에서 가져온 리스트데이터라면 Array 를 선택하고 근데 만약 데이터를 합쳐서 만들어야 한다면 object와 Array를 합쳐서 만들어야해  섞을수있어 object를Array안에 넣을수있어 예문5처럼 만들수있어 이게 데이터를 정렬하는 방법이야 여기서 기억해야 할게있어 javascript문법 규칙을 기억해야해 콤마(,)를 빼먹지 말아야하고 예문에 보이는거처럼말이야 그리고 string쓸때"를 앞뒤에 넣는거 잊지말아야해! 

## `Object`
- 데이터를 저장하는곳
- Array와는 다르게 각value에 labal을붙일수있다
- 쉽게 말하면 이름을 줄수있다 각 객체에? 
- ex) const sunghoInfo = { name:"sungho",age:25,gender:"male"}이렇게 이름을 붙여실행시켜줄수있다
- javascrip에서의 object의 문법은 {} 이거다. 

# TOMORROW
`노마드 코더` 듣고 배출연습
