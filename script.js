let wakeUpTime = 7;
let noon = 12;
let evening = 18;
let lunchTime = 12;
let napTime = lunchTime + 2;
let partyTime;

// Showing Time

const showCurrentTime = () => {
  let clock = document.getElementById('clock');
  // console.log(clock);

  const currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = "AM";

  // Set Hours
  if (hours >= noon) {
    meridian = "PM";
  }

  if (hours > noon) {
    hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Put together the strings that display the time
  const clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
}


// Getting the clock to increment on its own and change out messages and pictures

const updateClock = () => {
  const time = new Date().getHours();
  let messageText;
  let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  const timeEventJS = document.getElementById("timeEvent");
  const lolcatImageJS = document.getElementById("lolcatImage");

  if (time == partyTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeUpTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == napTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon) {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  // console.log(messageText);
  timeEventJS.innerText = messageText;
  lolcatImageJS.src = image;

  showCurrentTime();
}
updateClock();


// Getting the clock to increment once a second
let oneSecond = 1000;
setInterval( updateClock, oneSecond);

// Getting the Party Time Button To Work
const partyButton = document.getElementById('partyTimeButton');

const partyEvent = () => {
  if (partyTime < 0) 
  {
      partyTime = new Date().getHours();
      partyTimeButton.innerText = "Party Over!";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
  }
  else
  {
      partyTime = -1;
      partyTimeButton.innerText = "Party Time!";
      partyTimeButton.style.backgroundColor = "#222";
  }
}

partyButton.addEventListener("click", partyEvent);
partyEvent(); 

// Activates Wake-Up selector
let wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

let wakeUpEvent = function()
{
  wakeUpTime = wakeUpTimeSelector.value;
  // console.log(wakeUpTime);
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
const lunchTimeSelector =  document.getElementById("lunchTimeSelector");

const lunchEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
const napTimeSelector =  document.getElementById("napTimeSelector");

const napEvent = function()
{
    napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
