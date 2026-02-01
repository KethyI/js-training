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
// function getDateAgo(date, days) {
//   let oldDate = new Date(date);
  
//   oldDate.setDate(oldDate.getDate() - days);
  
//   return oldDate.getDate();
   
// }
// let date = new Date(2015, 0, 2);
// getDateAgo(date, 1);

// // task5
// function getLastDayOfMonth(year, month) {
//   let temporaryDate = new Date(year, month + 1, 0);
//   return temporaryDate.getDate();
// }

// // task6
// function getSecondsToday() {
//   let date = new Date();
//   let seconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
//   return seconds; 

// }

// // task7
// function getSecondsToTomorrow() {
//   let date = new Date();
//   let secondsLeft = (86400 - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()));
//   return secondsLeft;
  
// }

// task8
function formatDate(date) {
  let now = new Date();
  let setDate = new Date(date);
  let difference = now - setDate;

  if (difference <= 1000) return "right now";
  else if (difference <= 60000 ) return `${Math.round(difference / 1000)} sec. ago`;
  else if (difference <= 3600000) return `${Math.round(difference / 60000)} min. ago`;
  else {
    let year = String(setDate.getFullYear()).slice(2, 4);
    let day = setDate.getDate();
    let month = setDate.getMonth() + 1;

    if (day < 10) day = `0`+day;
    if (month < 10) month = `0`+month;

    console.log(month);
    return `${day}.${month}.${year} ${setDate.getHours()}:${setDate.getMinutes()}`
  }
}
formatDate(new Date(new Date - 86400 * 1000));