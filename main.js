const analogHours = document.querySelector(".hours");
const analogMinutes = document.querySelector(".minute");

const electHours = document.querySelector(".elec-hours");
const dates = document.querySelector(".dates");

class Times {
  getHours() {
    const date = new Date();
    return date.getHours();
  }
  getMinute() {
    const date = new Date();
    return date.getMinutes();
  }
  getSeconds() {
    const date = new Date();
    return date.getSeconds();
  }
  getDay() {
    const date = new Date();
    return date.toDateString();
  }
}

const times = new Times();

setInterval(() => {
  dates.textContent = `${times.getDay()}`;
  electHours.textContent = `${
    times.getHours() < 10 ? "0" + times.getHours() : times.getHours()
  } : ${
    times.getMinute() < 10 ? "0" + times.getMinute() : times.getMinute()
  } : ${
    times.getSeconds() < 10 ? "0" + times.getSeconds() : times.getSeconds()
  }`;

  analogHours.style.transform = `rotate(${times.getHours() * 30}deg)`;
  analogMinutes.style.transform = `rotate(${times.getMinute() * 6}deg)`;
}, 1000);
