/**
 * This class is used to parse a date string into a Date object.
 * It also allows to perform operations on the date. (like adding days)
 * @param {String} dateString The date string to parse
 * @param {String} format The format of the date string (defaults to 'dd/mm/yyyy')
 * @param {String} seperator The seperator used in the date string (defaults to '/')
 * @private @method parseDate Parses the date string into a Date object
 * @method addDays Adds days to the date
 * @method getDate Returns the date object (or the date in the given format)
 * @method getMonth Returns the day of the month
 * @method getYear Returns the year
 * @method getDay Returns the day of the week
 * @method getHours Returns the hours
 * @method getMinutes Returns the minutes
 * @method getSeconds Returns the seconds
 * @method addYears Adds years to the date
 * @method addMonths Adds months to the date
 * @method addHours Adds hours to the date
 */

class DateParser {
  constructor(dateString, format, seperator) {
    this.dateString = dateString;
    this.format = format || "dd/mm/yyyy";
    this.seperator = seperator || "/";
    this.date = this.#parseDate();
  }

  #parseDate() {
    let date = new Date();
    let parts = this.dateString.split(this.seperator);
    let day = parts[this.format.indexOf("dd")];
    let month = parts[this.format.indexOf("mm")];
    let year = parts[this.format.indexOf("yyyy")];
    date.setDate(day);
    date.setMonth(month - 1);
    date.setFullYear(year);
    return date;
  }

  addDays(days) {
    this.date.setDate(this.date.getDate() + days);
  }

  getDate(format) {
    if (format) {
      let day = this.date.getDate();
      let month = this.date.getMonth() + 1;
      let year = this.date.getFullYear();
      return format.replace("dd", day).replace("mm", month).replace("yyyy", year);
    }
    return this.date;
  }

  getMonth() {
    return this.date.getMonth() + 1;
  }

  getYear() {
    return this.date.getFullYear();
  }

  getDay() {
    return this.date.getDay();
  }

  getHours() {
    return this.date.getHours();
  }

  getMinutes() {
    return this.date.getMinutes();
  }

  getSeconds() {
    return this.date.getSeconds();
  }

  addYears(years) {
    this.date.setFullYear(this.date.getFullYear() + years);
  }

  addMonths(months) {
    this.date.setMonth(this.date.getMonth() + months);
  }

  addHours(hours) {
    this.date.setHours(this.date.getHours() + hours);
  }

  addMinutes(minutes) {
    this.date.setMinutes(this.date.getMinutes() + minutes);
  }
}
