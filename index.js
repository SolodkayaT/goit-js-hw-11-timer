function pad(value) {
  return String(value).padStart(2, '0');
}

class CountdownTime {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  updateTime(day, hour, min, sec) {
    const timerId = this.selector.selector;
    console.log(timerId);
    const days = document.querySelector(`${timerId} span[data-value="days"]`);
    const hours = document.querySelector(`${timerId} span[data-value="hours"]`);
    const minutes = document.querySelector(
      `${timerId} span[data-value="mins"]`,
    );
    const seconds = document.querySelector(
      `${timerId} span[data-value="secs"]`,
    );

    days.textContent = day;
    hours.textContent = hour;
    minutes.textContent = min;
    seconds.textContent = sec;
  }

  start() {
    this.timerId = setInterval(() => {
      const currentTime = Date.now();

      const time = this.selector.targetDate - currentTime;

      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

      this.updateTime(days, hours, mins, secs);
    }, 1000);
  }
}
const timer = new CountdownTime({
  selector: '#timer-1',
  targetDate: new Date(2020, 0, 10, 5, 40),
});
timer.start();
const timer2 = new CountdownTime({
  selector: '#timer-2',
  targetDate: new Date(2019, 11, 25, 5, 40),
});
timer2.start();
