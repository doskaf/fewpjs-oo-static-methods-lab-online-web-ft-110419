class Formatter {
  static capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase());
  }
  
  static sanitize(string) {
    return string.replace(/([^a-zA-Z('\-)])/, '');
  }
  
  static titleize(string) {
    
  }
}