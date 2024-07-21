export default class DateUtilities {
  static getCurrentDate() {
    return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
  }
}
