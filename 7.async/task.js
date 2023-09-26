class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  
  addClock(time, callback) {
    if(!time || !callback){
      throw new Error('Отсутствуют обязательные аргументы');
    }

    const isExist = this.alarmCollection.some(alarm => alarm.time === time);

    if (isExist) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      time,
      callback,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  start(){
    if (this.intervalId !== null) {
      return;
    }

    this.intervalId = setInterval(() => {
      const time = this.getCurrentFormattedTime();

      this.alarmCollection.forEach(alarm => {
        if (alarm.time === time) {
          if (alarm.canCall === true) {
            alarm.callback();
            alarm.canCall = false;
          }
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);

    this.intervalId = null;
  }

  clearAlarms() {
    this.alarmCollection = [];
  }
  resetAllCalls(){
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
  }

}

