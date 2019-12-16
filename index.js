const targetDate = new Date(2019, 11, 20, 5, 40).getTime();
function pad(value) {
  return String(value).padStart(2, '0');
}
const CountdownTime = {
  UpdateTime(day, hour, min, sec) {
    const refs = {
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      minutes: document.querySelector('span[data-value="mins"]'),
      seconds: document.querySelector('span[data-value="secs"]'),
    };
    refs.days.textContent = day;
    refs.hours.textContent = hour;
    refs.minutes.textContent = min;
    refs.seconds.textContent = sec;
  },

  start() {
    this.timerId = setInterval(() => {
      const currentTime = Date.now();

      const time = targetDate - currentTime;

      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

      this.UpdateTime(days, hours, mins, secs);
    }, 1000);
  },
};

CountdownTime.start();
