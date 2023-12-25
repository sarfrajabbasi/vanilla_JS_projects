const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');

const items = document.querySelectorAll('.deadline-format h4');

let futureData = new Date(2024,1,10,30,0);

const year = futureData.getFullYear();
const hours = futureData.getHours();
const mins = futureData.getMinutes();
const secs = futureData.getSeconds();
const month = futureData.getMonth();
const date = futureData.getDate()
const day = futureData.getDay();

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${date}  ${months[month]} ${year}, ${hours}:${mins}:${secs} am`

const futurTime = futureData.getTime();
console.log(futurTime);