class Formatter {
  static capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase());
  }
  
  static sanitize(string) {
    string.replace(/[]/)
  }
  
  static titleize(string) {
    
  }
}