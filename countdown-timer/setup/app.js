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

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");

const items = document.querySelectorAll(".deadline-format h4");

let futureData = new Date(2023, 11, 31, 12, 30, 0);

const year = futureData.getFullYear();
const hours = futureData.getHours();
const mins = futureData.getMinutes();
const secs = futureData.getSeconds();
const month = futureData.getMonth();
const date = futureData.getDate();
const day = futureData.getDay();

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${date}  ${months[month]} ${year}, ${hours}:${mins}:${secs} am`;

const futurTime = futureData.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const remainingTime = futurTime - today;
  // 1s =1000ms
  // 1m =60s
  // 1hr =60min
  // 1d =24hr
  // values in ms
  const oneday = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  // calculate all values
  let days = Math.floor(remainingTime / oneday);
  let hours = Math.floor((remainingTime % oneday) / oneHour);
  let minutes = Math.floor((remainingTime % oneHour) / oneMin);
  let seconds = Math.floor((remainingTime % oneMin) / 1000);

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }
  // set value arrays
  const dateValues = [days, hours, minutes, seconds];
  items.forEach((item, index) => {
    item.innerHTML = format(dateValues[index]);
  });
  if (remainingTime < 0) {
    clearInterval(coundDown)
    deadline.innerHTML = '<h4 class=expired>Sorry, this giveaway has expired</h4>'
  }
}
// count down
let coundDown = setInterval(getRemainingTime, 1000);
getRemainingTime()
