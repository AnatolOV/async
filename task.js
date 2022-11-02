class AlarmClock {
  constructor(timerId = null) {
    this.alarmCollection = [];
  }

  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error("error text");
    }

    if (this.alarmCollection.some((item) => item.id === id)) {
      console.error("Ошибка!!! Звонок уже существует");
      return;
    }

    this.alarmCollection.push({ time: "time", callback: callback, id: id });
  }

  removeClock(id) {
    let larr = this.alarmCollection.length;

    this.alarmCollection = this.alarmCollection.filter(
      (item) => item.id !== id
    );
    return larr === this.alarmCollection.length;
  }

  getCurrentFormattedTime() {
    this.today = new Date();
    return this.today.toUTCString();
  }

  start() {
    if (timerId != null) {
      console.log("Интервал запущен");
    } else if (timerId === null) {
      timerId = this.alarmCollection.forEach(function r(item) {
        if (item.time === item.getCurrentFormattedTime()) {
          return this.alarmCollection.callback;
        }
      });
    }
    /* function checkCliock(call) {
      if(new Date() === time)*/
    /*В методе start должна быть следующая реализация. 
    Вы должны проверить запущен ли уже интервал? Если интервал запущен, то в timerId должно быть какое-то значение. 
    В таком случае ничего не нужно выполнять…Если итервал не запускался (в timerId отсутствует значение), то вы должны создать новый интервал.
    В этом интервале, вы должны перебирать все объекты звонков (с помощью метода forEach) и каждый звонок необходимо проверить: необходимо ли ему прозвенеть? 
    Если у звонка время (свойство time) совпадает с текущими временем (результатом метода getCurrentFormattedTime), то вы должны вызывать колбек звонка…
    Для удобства проверки, в задании предлагается реализовать отдельную “мини” функцию checkClock, в которую будет передаваться звонок и этот звонок будет проверяться, 
    а по необходимости вызываться. Только эту функцию советую реализовать стрелочным синтаксисом, чтобы не потерять контекст 
    --- ??? Мне не понятно что значит запущенный интервал (значение timerId). Что значит создать новый интервал?*/
  }

  stop(timerId) {
    if (timerId !== null) {
      this.alarmCollection.clearInterval(id);
    }
  }

  printAlarms() {
    this.alarmCollection.forEach((item) =>
      console.log(`id: ${item.id};`, `time: ${item.time}.`)
    );
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
let a = new AlarmClock();
a.addClock(42, 5, 21);
a.addClock(4, 5, 1);
a.addClock(54, 5, 83);
a.addClock(94, 5, 93);
console.log(a.getCurrentFormattedTime());
console.log(a.removeClock(15));
console.log(a.alarmCollection);
a.printAlarms();
