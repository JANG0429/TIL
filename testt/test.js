function daysInMonth( month ){
    // 여기에 switch를 이용해 각 달의 날짜수를 반환하는 프로그램을 작성하세요.
  switch(month) {
    case 2:
            return 28;
        break;
    case 4:
            return 30;
        break;
    case 6:
            return 30;
        break;
    case 9:
            return 30;
        break;
    case 11:
            return 30;
        break;
    default :
            return 31;
  }
}




 var age = 25;

 if(age < 20){
     console.log("20세 미만입니다. ");
     
 } else {
     console.log("20세 이상입니다.");
 }