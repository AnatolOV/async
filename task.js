class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId;
  }
  addClock(time, callback, id) {
    this.time = time;
    this.callback = callback;
    this.id = id;
    if (id === undefined) {
      throw new Error("error text");
    }

    if (this.timerId) {
      console.error();
      return;
    }
    this.alarmCollection.push({
      id: this.id,
      time: this.time,
      callback: this.callback,
    });
  }
  removeClock(id) {
    try {
      for (let i = 0; i < this.alarmCollection.length; i++) {
        console.log(
          this.alarmCollection.filter(() => this.alarmCollection[i].id === id)
        ); // ???не понимаю как с помощью фильтра удалить объект из массива..? и что значит - "Верните логическое значение об успешности/провале удаления объекта звонка из общего массива."
      }
    } catch (error) {
      return error;
    }
  }
  getCurrentFormattedTime(time) {
    this.time = String(time);
  }

  start() {
    function checkCliock(call) {
      if (new Date() === this.alarmCollection[call].time) {
        return this.alarmCollection[call].callback;
      } //else if (this.alarmCollection[call].time === underfind) {
    }
    /*запускает все звонки - что это значит???
Создайте функцию проверки (checkClock), которая принимает звонок и проверяет: если текущее время совпадает со временем звонка, то вызывайте колбек.??? что значит "принимает звонок"? это значит в аргумент подставляется объект в массиве alarmCollection?
Если значение идентификатора текущего таймера отсутствует, то создайте новый интервал.
??? -  А что делать если текущее время не совпадает со временем звонка?
В этом интервале реализуйте функцию, которая будет перебирать все звонки, и для каждого вызывать функцию checkClock. - не понимаю, внутри функции checkClock должна вызываться checkClock???
Результат функции setInterval сохраните в свойстве идентификатора текущего таймера.*/
  }
  stop() {
    /*останавливает выполнение всех звонков

Сделайте проверку существования идентификатора текущего таймера.
Если у идентификатора текущего таймера есть значение, то вызовите функцию clearInterval для удаления интервала, а так же удалите значение из свойства "идентификатор текущего таймера". - ??? где эта функция clearInterval описана?*/
  }
  printAlarms() {
    for (let i = 0; i < this.alarmCollection.length; i++) {
      this.alarmCollection.forEach(() =>
        console.log(
          `id: ${this.alarmCollection[i].id};`,
          `time: ${this.alarmCollection[i].time}.`
        )
      );
      //С помощью метода forEach выведите информацию о каждом звонке (id и time). ??? как сделать чтобы при вызове меторда значения в консоли не дублировались?
    }
  }
  clearAlarms() {
    stop(this.alarmCollection);
    // с помощью какого метода необходимо удалять звонки? с помощью delete?
    /*удаляет все звонки
Вызывает метод остановки интервала.
Удаляет все звонки.*/
  }
}
let a = new AlarmClock();
a.addClock(42, 5, 3);
a.addClock(4, 5, 4);
a.removeClock(3);
a.printAlarms();
