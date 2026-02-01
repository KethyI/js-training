// task1
// let Jan20_2012 = new Date("2012-0-20T03:12");
// alert(Jan20_2012);

// // task2
// function getWeekDay(date) {
//   let d = new Date(date);
 
//   let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
//   let day = days[d.getDay()];

//   return day;
// }

// task3
// function getLocalDay(date) {
//   let d = new Date(date);
 
//   let day = d.getDay();

//   if (day === 0) day = 7;

//   return day;
// }

// task4
function getDateAgo(date, days) {
  let oldDate = new Date(date);
  
  oldDate.setDate(oldDate.getDate() - days);
  
  return oldDate.getDate();
   
}
let date = new Date(2015, 0, 2);
getDateAgo(date, 1);

// task5
function getLastDayOfMonth(year, month) {
  let temporaryDate = new Date(year, month + 1, 0);
  return temporaryDate.getDate();
}

// task6
function getSecondsToday() {
  let date = new Date();
  let seconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  return seconds; 

}

// task7
function getSecondsToTomorrow() {
  let date = new Date();
  let secondsLeft = (86400 - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()));
  return secondsLeft;
  
}

// task8
function formatDate(date) {
  
}