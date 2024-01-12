var dayNumber = new Date().getDay();
var day = "";
switch (dayNumber) {
 case 0:
day = "Sunday";
 break;
case 1:
day = "Monday";
break;
case 2:
day = "Tuesday";
break;
case 3:
day = "Wednesday";
break;
case 4:
day = "Thursday";
break;
case 5:
day = "Friday";
break;
case 6:
day = "Saturday";
break;
default:
break;
}
document.getElementById("date-2").innerHTML = day;


var daymonth = new Date().getMonth();
var month = "";
switch (daymonth) {
 case 0:
 month = "january";
 break;
case 1:
month = "Feb";
break;
case 2:
month = "March";
break;
case 3:
month = "april";
break;}
document.getElementById("month").innerHTML="," +"&nbsp;"+ month;

var a= new Date().getDate();
document.getElementById("date34").innerHTML="," + a;
var b= new Date().getFullYear();
document.getElementById("year").innerHTML=","+"&nbsp;" + b;




setInterval(()=>{
  const time = document.querySelector(".display #time");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_night = "AM";
  if(hours > 12){
    day_night = "PM";
    hours = hours - 12;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(hours < 10){
    hours = "0" + hours;
  }
 time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
});